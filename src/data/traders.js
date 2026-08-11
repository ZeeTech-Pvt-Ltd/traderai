const rawTraders = [
  ["Titan-01", "Claude Opus 4.7", "Forex", "Ichimoku Cloud", 104, 33.50, 1675, 0, -32.68, 35.06, 9.6],
  ["Atlas-02", "GPT-5.5", "Forex", "Trend + Momentum Confirmation", 104, 13.88, 694.02, 36.50, -11.41, 35.93, 6.8],
  ["Orion-03", "Qwen 3.7 Max", "Forex", "Pivot Points", 104, 8.84, 442.06, 0, -4.20, 35.44, 4.2],
  ["Helios-04", "Claude Opus 4.7", "Crypto", "Supertrend", 104, -10.30, -515.00, 0, -14.89, 47.37, 7.1],
  ["Vega-05", "DeepSeek V4 Pro", "Crypto", "Grid Trading", 104, 0.63, 31.70, 0, -1.88, 52.63, 3.8],
  ["Nova-06", "Kimi K2.6", "Crypto", "Bollinger Squeeze", 104, -3.10, -155.18, 0, -3.39, 41.96, 4.7],
  ["Pulsar-07", "GPT-5.5", "Stocks", "VWAP", 104, -1.52, -76.24, 0, -8.50, 41.31, 5.5],
  ["Quasar-08", "Grok 4.3", "Stocks", "Opening Range Breakout", 104, 5.78, 288.98, 0, -19.09, 29.85, 8.3],
  ["Lyra-09", "MiniMax M2.1", "Stocks", "MA Crossover", 100, -18.09, -904.64, 14.07, -34.78, 34.33, 8.9],
  ["Cygnus-10", "Gemini 3.5 Flash", "Commodities", "ATR Volatility Breakout", 104, -16.48, -824.09, 0, -29.47, 30.07, 8.1],
  ["Draco-11", "GLM-5", "Commodities", "CCI (Commodity Channel Index)", 100, -75.73, -3787, -0.30, -75.79, 26.62, 9.4],
  ["Phoenix-12", "Llama 4 Scout", "Commodities", "Donchian Channel Breakout", 100, -75.48, -3774, 0, -83.94, 35.26, 9.8],
  ["Hydra-13", "Grok 4.3", "Indices", "MACD Trend", 100, -93.47, -4674, 0, -93.77, 40.29, 9.9],
  ["Corvus-14", "Qwen 3.7 Max", "Indices", "ADX Trend Strength", 104, -18.45, -922.61, 0, -51.66, 34.27, 8.7],
  ["Zephyr-15", "Kimi K2.6", "Indices", "Fibonacci Retracement", 104, -12.46, -622.85, 0, -38.51, 38.24, 7.6],
  ["Aether-16", "DeepSeek V4 Pro", "Futures", "Volume Profile / OBV", 100, -73.61, -3681, 0, -74.83, 25.82, 9.3],
  ["Nyx-17", "GLM-5", "Futures", "Support/Resistance Breakout", 100, -48.04, -2402, 0, -49.84, 32.52, 8.8],
  ["Erebus-18", "Gemini 3.5 Flash", "Options", "Bollinger Band Mean Reversion", 100, -20.99, -1050, 0, -34.23, 35.35, 7.9],
  ["Sirius-19", "MiniMax M2.1", "Options", "RSI Momentum", 100, 20.99, -1050, 0, 34.23, 35.35, 7.9],
  ["Altair-20", "Llama 4 Scout", "ETFs", "Keltner Channel", 99, 60.99, 1060, 0, 42.23, 45.35, 7.9],
];

const seedFrom = (text) => Array.from(text).reduce((sum, char) => sum + char.charCodeAt(0), 0);

function seeded(seed) {
  let value = seed % 2147483647;
  return function () {
    value = (value * 48271) % 2147483647;
    return value / 2147483647;
  };
}

function makeSeries(name, totalReturn, points, start = 0) {
  const random = seeded(seedFrom(name));
  const volatility = Math.max(1.5, Math.min(8, Math.abs(totalReturn) / 12 + 2));
  const values = [start];
  for (let i = 1; i < points; i++) {
    const progress = i / (points - 1);
    const target = start + totalReturn * progress;
    const prev = values[i - 1];
    const pull = (target - prev) * 0.18;
    const shock = (random() - 0.48) * volatility;
    const jump = random() > 0.94 ? (random() - 0.45) * volatility * 4.6 : 0;
    values.push(prev + pull + shock + jump);
  }
  values[values.length - 1] = start + totalReturn;
  return values;
}

function makeTrades(name, returnPct, count) {
  const random = seeded(seedFrom(name + '-trades'));
  const symbols = ['NAS100', 'XAUUSD', 'EURUSD', 'BTCUSD', 'US30', 'GBPUSD'];
  const winChance = returnPct >= 0 ? 0.52 : 0.38;
  return Array.from({ length: count }, (_, i) => {
    const win = random() < winChance;
    const action = random() > 0.5 ? 'BUY' : 'SELL';
    const entry = 28000 + random() * 1700;
    const pnl = (0.25 + random() * 3.8) * (win ? 1 : -1);
    const exit = entry * (1 + pnl / 100);
    const day = String(17 - Math.floor(i / 6)).padStart(2, '0');
    const hour = String(8 + (i * 3) % 12).padStart(2, '0');
    const minute = String((i * 11) % 60).padStart(2, '0');
    return { date: `2026-07-${day} ${hour}:${minute}`, symbol: symbols[Math.floor(random() * symbols.length)], action, entry: entry.toFixed(2), exit: exit.toFixed(2), pnl: pnl.toFixed(2) };
  });
}

export const TRADERS = rawTraders.map((item, i) => {
  const totalReturn = item[5];
  const monthShares = [0.34, 0.16, -0.19, 0.29];
  const slug = item[0].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  return {
    id: i + 1,
    name: item[0],
    slug,
    initial: item[0].charAt(0),
    model: item[1],
    market: item[2],
    strategy: item[3],
    days: item[4],
    totalReturn,
    totalProfit: item[6],
    floatingPnl: item[7],
    maxDrawdown: item[8],
    winRate: item[9],
    risk: item[10],
    balance: 5000 + item[6],
    avgVolatility: Math.max(4.2, Math.min(19.8, Math.abs(totalReturn) / 5 + 5.8)),
    bestVolatility: Math.max(2.1, Math.min(12.5, Math.abs(totalReturn) / 9 + 3.4)),
    profitFactor: Math.max(0.32, 1 + totalReturn / 45),
    avgHoldTime: `${String((i * 7 + 2) % 12).padStart(2, '0')}:${String((i * 13 + 5) % 60).padStart(2, '0')}:18`,
    series: makeSeries(item[0], totalReturn, 70),
    equity: makeSeries(item[0] + '-equity', totalReturn * 24, 70, 5000),
    price: makeSeries(item[0] + '-price', totalReturn * 4, 90, 29200),
    monthly: monthShares.map((share, mi) => ({
      label: ['Apr', 'May', 'Jun', 'Jul'][mi],
      value: Number((totalReturn * share + (mi === 3 ? totalReturn * 0.12 : 0)).toFixed(2)),
    })),
    trades: makeTrades(item[0], totalReturn, 23),
    description: `A ${item[3].toLowerCase()} AI trader focused on ${item[2].toLowerCase()} markets, using ${item[1]} for signal generation and adaptive position sizing.`,
  };
});

export const RISK_COLORS = {
  Low: 'bg-[#05df72]/10 text-[#05df72] border-[#05df72]/20',
  Medium: 'bg-[#fcbb00]/10 text-[#fcbb00] border-[#fcbb00]/20',
  High: 'bg-[#fb2c36]/10 text-[#fb2c36] border-[#fb2c36]/20',
};

export function getTraderBySlug(slug) {
  return TRADERS.find((t) => t.slug === slug) || null;
}
