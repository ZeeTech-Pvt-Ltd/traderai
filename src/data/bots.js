// Deterministic sparkline data for each bot
function seededSparkline(base, points = 20) {
  const offsets = [
    0, 2.1, -1.3, 3.8, 0.5, -2.4, 4.2, 1.1, -0.8, 3.3,
    -1.9, 2.7, 0.3, -3.1, 1.8, -0.5, 2.9, -1.1, 3.5, 0.7,
  ];
  const data = [];
  let val = base * 0.85;
  for (let i = 0; i < points; i++) {
    val += offsets[i] * (base / 12);
    val = Math.max(val, base * 0.4);
    data.push(Math.round(val * 100) / 100);
  }
  return data;
}

const SPARKLINE_BASES = {
  atlas: 8.2, helios: 5.7, nova: 12.3, deltaforge: 3.1,
  sigma: 6.8, sentinel: 9.4, blaze: 4.5, nexus: 11.2,
  flux: 2.8, scholar: 7.1, cipher: 5.5, razor: 20.6,
};

export const SPARKLINES = {};
for (const [id, base] of Object.entries(SPARKLINE_BASES)) {
  SPARKLINES[id] = seededSparkline(base);
}

export const BOTS = [
  { id: 'atlas', name: 'Atlas', title: 'AI Macro Trader', market: 'EUR/USD', strategy: 'Trend', model: 'GPT-5.2', risk: 'Medium', return: '+8.2%', color: '#7b5cff' },
  { id: 'helios', name: 'Helios', title: 'AI Volatility Trader', market: 'XAU/USD', strategy: 'Breakout', model: 'MiniMax-M2.1', risk: 'High', return: '+5.7%', color: '#fcbb00' },
  { id: 'nova', name: 'Nova', title: 'AI Crypto Momentum Trader', market: 'BTC/USD', strategy: 'Trend', model: 'GPT-5.2', risk: 'High', return: '+12.3%', color: '#05df72' },
  { id: 'deltaforge', name: 'DeltaForge', title: 'AI Arbitrage Specialist', market: 'EUR/GBP', strategy: 'Mean Reversion', model: 'MiniMax-M2.1', risk: 'Low', return: '+3.1%', color: '#5a7dff' },
  { id: 'sigma', name: 'Sigma', title: 'AI Index Trend Trader', market: 'SPX500', strategy: 'Swing', model: 'GPT-5.2', risk: 'Medium', return: '+6.8%', color: '#5a7dff' },
  { id: 'sentinel', name: 'Sentinel', title: 'AI Social Sentiment Trader', market: 'SOL/USD', strategy: 'Scalping', model: 'MiniMax-M2.1', risk: 'High', return: '+9.4%', color: '#05df72' },
  { id: 'blaze', name: 'Blaze', title: 'AI Trend Detection Specialist', market: 'USD/JPY', strategy: 'Trend', model: 'GPT-5.2', risk: 'Medium', return: '+4.5%', color: '#fb2c36' },
  { id: 'nexus', name: 'Nexus', title: 'AI Gaming Sector Trader', market: 'NAS100', strategy: 'Breakout', model: 'GPT-5.2', risk: 'High', return: '+11.2%', color: '#5a7dff' },
  { id: 'flux', name: 'Flux', title: 'AI Payment Flow Analyst', market: 'USD/CHF', strategy: 'Mean Reversion', model: 'MiniMax-M2.1', risk: 'Low', return: '+2.8%', color: '#fcbb00' },
  { id: 'scholar', name: 'Scholar', title: 'AI Research Alpha Trader', market: 'GBP/USD', strategy: 'Swing', model: 'GPT-5.2', risk: 'Medium', return: '+7.1%', color: '#05df72' },
  { id: 'cipher', name: 'Cipher', title: 'AI NLP Sentiment Trader', market: 'XAG/USD', strategy: 'Scalping', model: 'MiniMax-M2.1', risk: 'Medium', return: '+5.5%', color: '#7b5cff' },
  { id: 'razor', name: 'Razor-0x01', title: 'AI Commodities Specialist', market: 'XAU/USD', strategy: 'Breakout', model: 'GPT-5.2', risk: 'High', return: '+20.6%', color: '#fcbb00' },
];

export const BOT_PROFILES = {
  atlas: {
    description: 'Atlas analyzes macro-economic indicators across global markets, focusing on currency pairs influenced by central bank policies, GDP data, and geopolitical events. It excels in trending markets where fundamental drivers align with technical confirmations.',
    winRate: '67%', totalTrades: 342, avgHoldingPeriod: '4.2 hours', maxDrawdown: '-8.1%', sharpeRatio: '1.42', volatility: '12.3%', started: 'March 2026',
    monthlyReturns: [{ month: 'MAR', return: '+1.8%' }, { month: 'APR', return: '+2.4%' }, { month: 'MAY', return: '+2.1%' }, { month: 'JUN', return: '+1.9%' }],
    recentTrades: [
      { id: 1, action: 'BUY', market: 'EUR/USD', lots: '5.0', entryPrice: '1.08345', exitPrice: '1.08610', profit: '+$55.00', date: '2026-06-15', status: 'closed' },
      { id: 2, action: 'SELL', market: 'GBP/USD', lots: '3.0', entryPrice: '1.2734', exitPrice: '1.2702', profit: '+$48.00', date: '2026-06-14', status: 'closed' },
      { id: 3, action: 'BUY', market: 'USD/JPY', lots: '4.0', entryPrice: '149.62', exitPrice: '150.18', profit: '+$72.00', date: '2026-06-13', status: 'closed' },
      { id: 4, action: 'SELL', market: 'AUD/USD', lots: '6.0', entryPrice: '0.6620', exitPrice: '0.6585', profit: '+$105.00', date: '2026-06-12', status: 'closed' },
      { id: 5, action: 'BUY', market: 'USD/CAD', lots: '3.5', entryPrice: '1.3720', exitPrice: '1.3705', profit: '-$21.00', date: '2026-06-11', status: 'closed' },
    ],
  },
  helios: {
    description: 'Helios specializes in volatility-driven markets, particularly gold and precious metals. It detects volatility expansion patterns and positions for breakouts during high-impact news events and market open sessions.',
    winRate: '58%', totalTrades: 215, avgHoldingPeriod: '2.8 hours', maxDrawdown: '-12.4%', sharpeRatio: '0.95', volatility: '18.7%', started: 'March 2026',
    monthlyReturns: [{ month: 'MAR', return: '+1.2%' }, { month: 'APR', return: '+1.8%' }, { month: 'MAY', return: '+1.5%' }, { month: 'JUN', return: '+1.2%' }],
    recentTrades: [
      { id: 1, action: 'SELL', market: 'XAU/USD', lots: '1.5', entryPrice: '2355.10', exitPrice: '2348.30', profit: '+$156.20', date: '2026-06-15', status: 'closed' },
      { id: 2, action: 'BUY', market: 'XAG/USD', lots: '8.0', entryPrice: '28.45', exitPrice: '28.72', profit: '+$48.00', date: '2026-06-14', status: 'closed' },
      { id: 3, action: 'SELL', market: 'XAU/USD', lots: '2.0', entryPrice: '2362.00', exitPrice: '2370.50', profit: '-$85.00', date: '2026-06-13', status: 'closed' },
    ],
  },
  nova: {
    description: 'Nova is purpose-built for cryptocurrency momentum trading. It identifies strong directional moves in digital assets using on-chain volume analysis, order book imbalance, and cross-exchange momentum divergence.',
    winRate: '63%', totalTrades: 189, avgHoldingPeriod: '3.5 hours', maxDrawdown: '-15.2%', sharpeRatio: '1.68', volatility: '22.1%', started: 'March 2026',
    monthlyReturns: [{ month: 'MAR', return: '+2.8%' }, { month: 'APR', return: '+3.5%' }, { month: 'MAY', return: '+3.1%' }, { month: 'JUN', return: '+2.9%' }],
    recentTrades: [
      { id: 1, action: 'SELL', market: 'BTC/USD', lots: '0.50', entryPrice: '68742.30', exitPrice: '68252.30', profit: '+$245.00', date: '2026-06-15', status: 'closed' },
      { id: 2, action: 'BUY', market: 'ETH/USD', lots: '5.0', entryPrice: '3450.00', exitPrice: '3520.00', profit: '+$350.00', date: '2026-06-14', status: 'closed' },
      { id: 3, action: 'SELL', market: 'SOL/USD', lots: '20.0', entryPrice: '142.85', exitPrice: '140.20', profit: '+$53.00', date: '2026-06-13', status: 'closed' },
    ],
  },
  deltaforge: {
    description: 'DeltaForge executes arbitrage strategies across correlated currency pairs, identifying temporary price dislocations between EUR/GBP, EUR/USD, and GBP/USD triangular relationships.',
    winRate: '72%', totalTrades: 456, avgHoldingPeriod: '45 minutes', maxDrawdown: '-3.2%', sharpeRatio: '2.15', volatility: '5.8%', started: 'March 2026',
    monthlyReturns: [{ month: 'MAR', return: '+0.8%' }, { month: 'APR', return: '+0.9%' }, { month: 'MAY', return: '+0.7%' }, { month: 'JUN', return: '+0.7%' }],
    recentTrades: [
      { id: 1, action: 'BUY', market: 'EUR/GBP', lots: '4.0', entryPrice: '0.8574', exitPrice: '0.8586', profit: '+$33.60', date: '2026-06-15', status: 'closed' },
      { id: 2, action: 'SELL', market: 'EUR/GBP', lots: '5.0', entryPrice: '0.8590', exitPrice: '0.8578', profit: '+$42.00', date: '2026-06-14', status: 'closed' },
    ],
  },
  sigma: {
    description: 'Sigma focuses on index trend trading across major equity benchmarks. It combines macro regime detection with technical trend filters to capture medium-term swings in SPX500, NAS100, and other indices.',
    winRate: '65%', totalTrades: 178, avgHoldingPeriod: '6.5 hours', maxDrawdown: '-9.8%', sharpeRatio: '1.35', volatility: '14.6%', started: 'April 2026',
    monthlyReturns: [{ month: 'APR', return: '+1.8%' }, { month: 'MAY', return: '+2.5%' }, { month: 'JUN', return: '+2.5%' }],
    recentTrades: [
      { id: 1, action: 'SELL', market: 'SPX500', lots: '2.0', entryPrice: '5432.10', exitPrice: '5416.80', profit: '+$94.20', date: '2026-06-15', status: 'closed' },
      { id: 2, action: 'BUY', market: 'NAS100', lots: '1.5', entryPrice: '19765.40', exitPrice: '19820.00', profit: '+$81.90', date: '2026-06-14', status: 'closed' },
    ],
  },
  sentinel: {
    description: 'Sentinel scrapes social media, news feeds, and on-chain data to gauge market sentiment around cryptocurrencies. It scalps short-term moves created by sentiment shifts and social volume spikes.',
    winRate: '61%', totalTrades: 523, avgHoldingPeriod: '22 minutes', maxDrawdown: '-18.5%', sharpeRatio: '1.12', volatility: '28.4%', started: 'March 2026',
    monthlyReturns: [{ month: 'MAR', return: '+2.5%' }, { month: 'APR', return: '+2.2%' }, { month: 'MAY', return: '+2.8%' }, { month: 'JUN', return: '+1.9%' }],
    recentTrades: [
      { id: 1, action: 'SELL', market: 'SOL/USD', lots: '15.0', entryPrice: '142.85', exitPrice: '141.65', profit: '+$67.50', date: '2026-06-15', status: 'closed' },
      { id: 2, action: 'BUY', market: 'LINK/USD', lots: '25.0', entryPrice: '14.25', exitPrice: '14.58', profit: '+$82.50', date: '2026-06-14', status: 'closed' },
    ],
  },
  blaze: {
    description: 'Blaze detects emerging trends in forex pairs using a multi-timeframe trend confirmation system. It enters on pullbacks within established trends, using Fibonacci retracements and momentum divergence for precision entry.',
    winRate: '64%', totalTrades: 256, avgHoldingPeriod: '3.8 hours', maxDrawdown: '-7.5%', sharpeRatio: '1.28', volatility: '11.2%', started: 'April 2026',
    monthlyReturns: [{ month: 'APR', return: '+1.2%' }, { month: 'MAY', return: '+1.8%' }, { month: 'JUN', return: '+1.5%' }],
    recentTrades: [
      { id: 1, action: 'SELL', market: 'USD/JPY', lots: '3.0', entryPrice: '149.62', exitPrice: '148.95', profit: '+$78.30', date: '2026-06-15', status: 'closed' },
      { id: 2, action: 'BUY', market: 'USD/JPY', lots: '2.5', entryPrice: '149.80', exitPrice: '150.25', profit: '+$45.00', date: '2026-06-14', status: 'closed' },
    ],
  },
  nexus: {
    description: 'Nexus specializes in the gaming and technology sector, trading NAS100 and related equities. It analyzes gaming industry trends, product launch cycles, and sector rotation patterns to capture breakout moves.',
    winRate: '60%', totalTrades: 145, avgHoldingPeriod: '5.2 hours', maxDrawdown: '-14.1%', sharpeRatio: '1.55', volatility: '19.8%', started: 'April 2026',
    monthlyReturns: [{ month: 'APR', return: '+3.5%' }, { month: 'MAY', return: '+4.2%' }, { month: 'JUN', return: '+3.5%' }],
    recentTrades: [
      { id: 1, action: 'BUY', market: 'NAS100', lots: '1.0', entryPrice: '19765.40', exitPrice: '19892.10', profit: '+$112.30', date: '2026-06-15', status: 'closed' },
      { id: 2, action: 'SELL', market: 'NAS100', lots: '0.8', entryPrice: '19850.00', exitPrice: '19720.00', profit: '+$96.00', date: '2026-06-14', status: 'closed' },
    ],
  },
  flux: {
    description: 'Flux analyzes cross-border payment flows and remittance data to predict currency movements in USD/CHF and related pairs. It focuses on safe-haven flows during market stress and capital repatriation patterns.',
    winRate: '71%', totalTrades: 312, avgHoldingPeriod: '1.5 hours', maxDrawdown: '-4.5%', sharpeRatio: '1.85', volatility: '6.9%', started: 'March 2026',
    monthlyReturns: [{ month: 'MAR', return: '+0.7%' }, { month: 'APR', return: '+0.8%' }, { month: 'MAY', return: '+0.6%' }, { month: 'JUN', return: '+0.7%' }],
    recentTrades: [
      { id: 1, action: 'BUY', market: 'USD/CHF', lots: '2.0', entryPrice: '0.8921', exitPrice: '0.8935', profit: '+$28.90', date: '2026-06-15', status: 'closed' },
      { id: 2, action: 'SELL', market: 'USD/CHF', lots: '3.0', entryPrice: '0.8940', exitPrice: '0.8922', profit: '+$54.00', date: '2026-06-14', status: 'closed' },
    ],
  },
  scholar: {
    description: 'Scholar reads academic research papers, central bank publications, and institutional research reports, converting qualitative analysis into quantitative trading signals for major forex pairs.',
    winRate: '66%', totalTrades: 198, avgHoldingPeriod: '5.8 hours', maxDrawdown: '-8.9%', sharpeRatio: '1.48', volatility: '13.5%', started: 'March 2026',
    monthlyReturns: [{ month: 'MAR', return: '+1.5%' }, { month: 'APR', return: '+2.1%' }, { month: 'MAY', return: '+1.8%' }, { month: 'JUN', return: '+1.7%' }],
    recentTrades: [
      { id: 1, action: 'SELL', market: 'GBP/USD', lots: '3.5', entryPrice: '1.2734', exitPrice: '1.2705', profit: '+$61.40', date: '2026-06-15', status: 'closed' },
      { id: 2, action: 'BUY', market: 'EUR/USD', lots: '4.0', entryPrice: '1.0820', exitPrice: '1.0845', profit: '+$50.00', date: '2026-06-14', status: 'closed' },
    ],
  },
  cipher: {
    description: 'Cipher processes natural language from news articles, earnings calls, and central bank communications to gauge market sentiment. It trades silver and precious metals based on narrative analysis.',
    winRate: '62%', totalTrades: 234, avgHoldingPeriod: '2.5 hours', maxDrawdown: '-10.2%', sharpeRatio: '1.18', volatility: '15.7%', started: 'April 2026',
    monthlyReturns: [{ month: 'APR', return: '+1.4%' }, { month: 'MAY', return: '+2.0%' }, { month: 'JUN', return: '+2.1%' }],
    recentTrades: [
      { id: 1, action: 'BUY', market: 'XAG/USD', lots: '10.0', entryPrice: '28.45', exitPrice: '28.62', profit: '+$42.80', date: '2026-06-15', status: 'closed' },
      { id: 2, action: 'SELL', market: 'XAG/USD', lots: '8.0', entryPrice: '28.80', exitPrice: '28.50', profit: '+$48.00', date: '2026-06-14', status: 'closed' },
    ],
  },
  razor: {
    description: 'Razor-0x01 is our top-performing agent, specializing in commodities breakout trading. It combines GPT-5.2 market analysis with real-time volume profiling to capture high-probability breakout moves in gold and precious metals.',
    winRate: '59%', totalTrades: 127, avgHoldingPeriod: '4.0 hours', maxDrawdown: '-11.8%', sharpeRatio: '1.92', volatility: '16.3%', started: 'April 2026',
    monthlyReturns: [{ month: 'APR', return: '+5.8%' }, { month: 'MAY', return: '+7.2%' }, { month: 'JUN', return: '+7.6%' }],
    recentTrades: [
      { id: 1, action: 'BUY', market: 'XAU/USD', lots: '2.5', entryPrice: '2354.80', exitPrice: '2362.30', profit: '+$187.50', date: '2026-06-15', status: 'closed' },
      { id: 2, action: 'BUY', market: 'XAU/USD', lots: '2.0', entryPrice: '2340.00', exitPrice: '2355.00', profit: '+$300.00', date: '2026-06-14', status: 'closed' },
      { id: 3, action: 'SELL', market: 'XAU/USD', lots: '1.5', entryPrice: '2370.00', exitPrice: '2362.00', profit: '+$120.00', date: '2026-06-13', status: 'closed' },
      { id: 4, action: 'BUY', market: 'CRUDE/USD', lots: '5.0', entryPrice: '78.50', exitPrice: '79.80', profit: '+$325.00', date: '2026-06-12', status: 'closed' },
      { id: 5, action: 'SELL', market: 'XAU/USD', lots: '2.0', entryPrice: '2350.00', exitPrice: '2358.00', profit: '-$160.00', date: '2026-06-11', status: 'closed' },
    ],
  },
};

export const MARKETS = {
  forex: ['EUR/USD', 'GBP/USD', 'USD/JPY', 'AUD/USD', 'USD/CHF', 'EUR/GBP', 'GBP/JPY', 'USD/CAD'],
  crypto: ['BTC/USD', 'ETH/USD', 'SOL/USD', 'BNB/USD', 'XRP/USD', 'AVAX/USD', 'LINK/USD', 'ADA/USD', 'DOGE/USD'],
  commodities: ['XAU/USD', 'XAG/USD', 'CRUDE/USD', 'XPT/USD', 'XPD/USD', 'NATGAS/USD'],
  indices: ['NAS100', 'SPX500', 'US30', 'GER40', 'UK100'],
};

export const TRADES = [
  { id: 1, bot: 'Razor-0x01', action: 'BUY', market: 'XAU/USD', lots: '2.5', price: '2354.80', profit: '+$187.50', time: '12:34:22' },
  { id: 2, bot: 'Nova', action: 'SELL', market: 'BTC/USD', lots: '0.50', price: '68742.30', profit: '+$245.00', time: '12:32:15' },
  { id: 3, bot: 'Nexus', action: 'BUY', market: 'NAS100', lots: '1.0', price: '19765.40', profit: '+$112.30', time: '12:30:45' },
  { id: 4, bot: 'Sentinel', action: 'SELL', market: 'SOL/USD', lots: '15.0', price: '142.85', profit: '+$67.50', time: '12:28:33' },
  { id: 5, bot: 'Atlas', action: 'BUY', market: 'EUR/USD', lots: '5.0', price: '1.08345', profit: '+$55.00', time: '12:26:18' },
  { id: 6, bot: 'Sigma', action: 'SELL', market: 'SPX500', lots: '2.0', price: '5432.10', profit: '+$94.20', time: '12:24:50' },
  { id: 7, bot: 'Cipher', action: 'BUY', market: 'XAG/USD', lots: '10.0', price: '28.45', profit: '+$42.80', time: '12:22:40' },
  { id: 8, bot: 'Blaze', action: 'SELL', market: 'USD/JPY', lots: '3.0', price: '149.62', profit: '+$78.30', time: '12:20:12' },
  { id: 9, bot: 'DeltaForge', action: 'BUY', market: 'EUR/GBP', lots: '4.0', price: '0.8574', profit: '+$33.60', time: '12:18:05' },
  { id: 10, bot: 'Scholar', action: 'SELL', market: 'GBP/USD', lots: '3.5', price: '1.2734', profit: '+$61.40', time: '12:16:30' },
  { id: 11, bot: 'Flux', action: 'BUY', market: 'USD/CHF', lots: '2.0', price: '0.8921', profit: '+$28.90', time: '12:14:22' },
  { id: 12, bot: 'Helios', action: 'SELL', market: 'XAU/USD', lots: '1.5', price: '2355.10', profit: '+$156.20', time: '12:12:48' },
];

export const STRATEGY_PHILOSOPHIES = {
  Trend: 'Ride strong directional moves with disciplined entries.',
  'Mean Reversion': 'Fade extremes when price overshoots fair value.',
  Breakout: 'Enter only on confirmed range breaks with momentum.',
  Scalping: 'High-frequency micro-edge with tight risk control.',
  Swing: 'Multi-day positions targeting structural moves.',
};

export const RISK_COLORS = {
  Low: 'bg-trader-green/10 text-trader-green border-trader-green/20',
  Medium: 'bg-trader-amber/10 text-trader-amber border-trader-amber/20',
  High: 'bg-trader-red/10 text-trader-red border-trader-red/20',
};

export function getTraderByCode(id) {
  return BOTS.find((b) => b.id === id) || null;
}

export function getTraderProfile(id) {
  return BOT_PROFILES[id] || null;
}
