export default function Sparkline({
  data,
  width = 80,
  height = 32,
  color = '#05df72',
  area = false,
  strokeWidth = 1.5,
}) {
  if (!data || data.length < 2) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const pad = 2;

  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((val - min) / range) * (height - pad * 2) - pad;
    return `${x},${y}`;
  });

  const linePath = points.map((p, i) => (i === 0 ? 'M' : 'L') + p).join(' ');
  const gradId = `spark-grad-${Math.random().toString(36).slice(2, 6)}`;

  let areaPath = '';
  if (area && points.length > 1) {
    const firstX = points[0].split(',')[0];
    const lastX = points[points.length - 1].split(',')[0];
    areaPath = `${linePath} L${lastX},${height} L${firstX},${height} Z`;
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      {area && (
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.18" />
            <stop offset="100%" stopColor={color} stopOpacity="0.01" />
          </linearGradient>
        </defs>
      )}
      {area && <path d={areaPath} fill={`url(#${gradId})`} />}
      <path
        d={linePath}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
