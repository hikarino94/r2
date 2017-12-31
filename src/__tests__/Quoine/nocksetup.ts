// tslint:disable:object-literal-key-quotes
// tslint:disable:max-line-length
import * as nock from 'nock';

function nocksetup() {
  const quoine = nock('https://api.quoine.com');
  quoine
    .get('/orders/118573146')
    .reply(200, {
      id: 118573146,
      order_type: 'limit',
      quantity: '0.01',
      disc_quantity: '0.0',
      iceberg_total_quantity: '0.0',
      side: 'buy',
      filled_quantity: '0.0',
      price: 783000,
      created_at: 1509624642,
      updated_at: 1509624642,
      status: 'MOCKSTATUS',
      leverage_level: 10,
      source_exchange: 'QUOINE',
      product_id: 5,
      product_code: 'CASH',
      funding_currency: 'JPY',
      crypto_account_id: null,
      currency_pair_code: 'BTCJPY',
      average_price: '0.0',
      target: 'open',
      order_fee: '0.0',
      source_action: 'netout_open',
      unwound_trade_id: null,
      trade_id: '1417636',
      settings: null,
      trailing_stop_type: false,
      trailing_stop_value: false,
      executions: [
        { id: 12011367, quantity: '0.0', price: '783000.0', taker_side: 'buy', created_at: 1509624642, my_side: 'buy' }
      ],
      stop_triggered_time: null
    });
  quoine
    .get('/orders/118573146')
    .reply(200, {
      id: 118573146,
      order_type: 'limit',
      quantity: '0.01',
      disc_quantity: '0.0',
      iceberg_total_quantity: '0.0',
      side: 'buy',
      filled_quantity: '0.005',
      price: 783000,
      created_at: 1509624642,
      updated_at: 1509624642,
      status: 'MOCKSTATUS',
      leverage_level: 10,
      source_exchange: 'QUOINE',
      product_id: 5,
      product_code: 'CASH',
      funding_currency: 'JPY',
      crypto_account_id: null,
      currency_pair_code: 'BTCJPY',
      average_price: '0.0',
      target: 'open',
      order_fee: '0.0',
      source_action: 'netout_open',
      unwound_trade_id: null,
      trade_id: '1417636',
      settings: null,
      trailing_stop_type: false,
      trailing_stop_value: false,
      executions: [
        {
          id: 12011367,
          quantity: '0.005',
          price: '783000.0',
          taker_side: 'buy',
          created_at: 1509624642,
          my_side: 'buy'
        }
      ],
      stop_triggered_time: null
    });
  quoine
    .get('/orders/118573146')
    .reply(200, {
      id: 118573146,
      order_type: 'limit',
      quantity: '0.01',
      disc_quantity: '0.0',
      iceberg_total_quantity: '0.0',
      side: 'buy',
      filled_quantity: '0.01',
      price: 783000,
      created_at: 1509624642,
      updated_at: 1509624642,
      status: 'filled',
      leverage_level: 10,
      source_exchange: 'QUOINE',
      product_id: 5,
      product_code: 'CASH',
      funding_currency: 'JPY',
      crypto_account_id: null,
      currency_pair_code: 'BTCJPY',
      average_price: '0.0',
      target: 'open',
      order_fee: '0.0',
      source_action: 'netout_open',
      unwound_trade_id: null,
      trade_id: '1417636',
      settings: null,
      trailing_stop_type: false,
      trailing_stop_value: false,
      executions: [
        { id: 12011367, quantity: '0.01', price: '783000.0', taker_side: 'buy', created_at: 1509624642, my_side: 'buy' }
      ],
      stop_triggered_time: null
    });
  quoine
    .post(
      '/orders/',
      '{"order":{"price":783000,"product_id":"5","order_direction":"netout","order_type":"limit","side":"buy","quantity":0.01,"leverage_level":10}}'
    )
    .reply(200, {
      id: 118573146,
      order_type: 'limit',
      quantity: '0.01',
      disc_quantity: '0.0',
      iceberg_total_quantity: '0.0',
      side: 'buy',
      filled_quantity: '0.01',
      price: 783000,
      created_at: 1509624642,
      updated_at: 1509624642,
      status: 'filled',
      leverage_level: 10,
      source_exchange: 'QUOINE',
      product_id: 5,
      product_code: 'CASH',
      funding_currency: 'JPY',
      crypto_account_id: null,
      currency_pair_code: 'BTCJPY',
      average_price: '0.0',
      target: 'open',
      order_fee: '0.0',
      source_action: 'netout_open',
      unwound_trade_id: null,
      trade_id: '1417636'
    });
    quoine
    .post(
      '/orders/',
      '{"order":{"price":783000,"product_id":"5","order_type":"limit","side":"buy","quantity":0.01}}'
    )
    .reply(200, {
      id: 118573146,
      order_type: 'limit',
      quantity: '0.01',
      disc_quantity: '0.0',
      iceberg_total_quantity: '0.0',
      side: 'buy',
      filled_quantity: '0.01',
      price: 783000,
      created_at: 1509624642,
      updated_at: 1509624642,
      status: 'filled',
      source_exchange: 'QUOINE',
      product_id: 5,
      product_code: 'CASH',
      funding_currency: 'JPY',
      crypto_account_id: null,
      currency_pair_code: 'BTCJPY',
      average_price: '0.0',
      target: 'open',
      order_fee: '0.0',
      source_action: 'cash',
      unwound_trade_id: null,
      trade_id: '1417636'
    });
  quoine
    .get('/trading_accounts')
    .reply(200, [
      {
        id: 123456,
        leverage_level: 2,
        max_leverage_level: 2,
        current_leverage_level: 2,
        pnl: '0.0',
        equity: '0.0',
        margin: '0.0',
        free_margin: '0.0',
        trader_id: 45761,
        status: 'active',
        product_code: 'CASH',
        currency_pair_code: 'ETHBTC',
        position: 0,
        balance: '0.0',
        created_at: 1503831814,
        updated_at: 1503831814,
        pusher_channel: 'trading_account_123456',
        margin_percent: '0.1',
        product_id: 37,
        funding_currency: 'BTC'
      },
      {
        id: 123577,
        leverage_level: 2,
        max_leverage_level: 2,
        current_leverage_level: 2,
        pnl: '-8396.09',
        equity: '43505.06307',
        margin: '10200.00498',
        free_margin: '33305.05809',
        trader_id: 45761,
        status: 'active',
        product_code: 'CASH',
        currency_pair_code: 'BTCJPY',
        position: '0.12',
        balance: '51901.15307',
        created_at: 1503831814,
        updated_at: 1503831814,
        pusher_channel: 'trading_account_123577',
        margin_percent: '0.1',
        product_id: 5,
        funding_currency: 'JPY'
      },
      {
        id: 123578,
        leverage_level: 2,
        max_leverage_level: 2,
        current_leverage_level: 2,
        pnl: '0.0',
        equity: '0.0',
        margin: '0.0',
        free_margin: '0.0',
        trader_id: 45761,
        status: 'active',
        product_code: 'CASH',
        currency_pair_code: 'BTCUSD',
        position: 0,
        balance: '0.0',
        created_at: 1503831814,
        updated_at: 1503831814,
        pusher_channel: 'trading_account_123578',
        margin_percent: '0.1',
        product_id: 1,
        funding_currency: 'USD'
      },
      {
        id: 394548,
        leverage_level: 2,
        max_leverage_level: 2,
        current_leverage_level: 2,
        pnl: '0.0',
        equity: '0.0',
        margin: '0.0',
        free_margin: '0.0',
        trader_id: 45761,
        status: 'active',
        product_code: 'CASH',
        currency_pair_code: 'BTCSGD',
        position: 0,
        balance: '0.0',
        created_at: 1509007071,
        updated_at: 1509007071,
        pusher_channel: 'trading_account_123548',
        margin_percent: '0.1',
        product_id: 7,
        funding_currency: 'SGD'
      }
    ]);
  quoine
    .get('/trading_accounts')
    .reply(200, [
      {
        id: 123456,
        leverage_level: 2,
        max_leverage_level: 2,
        current_leverage_level: 2,
        pnl: '0.0',
        equity: '0.0',
        margin: '0.0',
        free_margin: '0.0',
        trader_id: 45761,
        status: 'active',
        product_code: 'CASH',
        currency_pair_code: 'ETHBTC',
        position: 0,
        balance: '0.0',
        created_at: 1503831814,
        updated_at: 1503831814,
        pusher_channel: 'trading_account_123456',
        margin_percent: '0.1',
        product_id: 37,
        funding_currency: 'BTC'
      },
      {
        id: 123577,
        leverage_level: 2,
        max_leverage_level: 2,
        current_leverage_level: 2,
        pnl: '-8396.09',
        equity: '43505.06307',
        margin: '10200.00498',
        free_margin: '33305.05809',
        trader_id: 45761,
        status: 'active',
        product_code: 'CASH',
        currency_pair_code: 'MOCKBTCJPY',
        position: '0.12',
        balance: '51901.15307',
        created_at: 1503831814,
        updated_at: 1503831814,
        pusher_channel: 'trading_account_123577',
        margin_percent: '0.1',
        product_id: 5,
        funding_currency: 'JPY'
      },
      {
        id: 123578,
        leverage_level: 2,
        max_leverage_level: 2,
        current_leverage_level: 2,
        pnl: '0.0',
        equity: '0.0',
        margin: '0.0',
        free_margin: '0.0',
        trader_id: 45761,
        status: 'active',
        product_code: 'CASH',
        currency_pair_code: 'BTCUSD',
        position: 0,
        balance: '0.0',
        created_at: 1503831814,
        updated_at: 1503831814,
        pusher_channel: 'trading_account_123578',
        margin_percent: '0.1',
        product_id: 1,
        funding_currency: 'USD'
      },
      {
        id: 394548,
        leverage_level: 2,
        max_leverage_level: 2,
        current_leverage_level: 2,
        pnl: '0.0',
        equity: '0.0',
        margin: '0.0',
        free_margin: '0.0',
        trader_id: 45761,
        status: 'active',
        product_code: 'CASH',
        currency_pair_code: 'BTCSGD',
        position: 0,
        balance: '0.0',
        created_at: 1509007071,
        updated_at: 1509007071,
        pusher_channel: 'trading_account_123548',
        margin_percent: '0.1',
        product_id: 7,
        funding_currency: 'SGD'
      }
    ]);
  quoine
    .get('/products/5/price_levels')
    .reply(200, {
      buy_price_levels: [
        ['810391.00', '1.40000000'],
        ['810390.01', '0.15900000'],
        ['810385.38', '0.99453000'],
        ['810056.70', '0.90812190'],
        ['810056.03', '4.27238000'],
        ['810020.01', '1.45000000'],
        ['809813.23', '1.64373076'],
        ['809792.96', '12.21573450'],
        ['809391.00', '0.16196692'],
        ['809371.72', '15.49911000'],
        ['808911.00', '0.02180000'],
        ['808887.10', '19.29446000'],
        ['808873.00', '1.00000000'],
        ['808545.79', '30.96109000'],
        ['808185.00', '0.30000000'],
        ['808065.00', '7.32000000'],
        ['808056.00', '1.00000000'],
        ['807706.64', '3.00000000'],
        ['807511.14', '37.34633000'],
        ['807000.00', '0.03000000'],
        ['806789.54', '99.77750000']
      ],
      sell_price_levels: [
        ['811000.00', '0.10000000'],
        ['811358.75', '0.84990000'],
        ['811358.76', '0.46939000'],
        ['811687.88', '0.07130000'],
        ['811688.44', '2.77267000'],
        ['811931.48', '4.66730009'],
        ['811951.76', '7.61228479'],
        ['812000.00', '0.10000000'],
        ['812373.43', '8.94714947'],
        ['812858.53', '9.07411534'],
        ['812861.00', '0.67000000'],
        ['813000.00', '0.10000000'],
        ['813200.18', '30.96109000'],
        ['813416.00', '0.50000000'],
        ['813718.50', '0.45000000'],
        ['813939.00', '0.30000000'],
        ['814000.00', '0.10000000'],
        ['814235.86', '37.34633000'],
        ['814676.00', '0.04820000'],
        ['814958.18', '99.77750000'],
        ['815000.00', '0.10000000']
      ]
    });
  quoine.get('/products/5/price_levels').reply(500);
  quoine.put('/orders/118573146/cancel').reply(200);
  quoine
    .put('/trades/close_all')
    .reply(200, [
      {
        id: 12345,
        currency_pair_code: 'BTCJPY',
        status: 'closed',
        side: 'long',
        margin_used: 0,
        open_quantity: 0,
        close_quantity: 0.01,
        quantity: 0.01,
        leverage_level: 10,
        product_code: 'CASH',
        product_id: 5,
        open_price: 2191207,
        close_price: 2188611.81027,
        trader_id: 12345,
        open_pnl: 0,
        close_pnl: -25.9519,
        pnl: -25.9519,
        stop_loss: 0,
        take_profit: 0,
        funding_currency: 'JPY',
        total_interest: 10.956035,
        created_at: 1513459542,
        updated_at: 1513459581,
        total_fee: '0.0',
        close_fee: '0.0'
      }
    ]);
  quoine.get('/accounts/balance').reply(200, [
    {
      currency: 'BTC',
      balance: '0.04925688'
    },
    {
      currency: 'USD',
      balance: '7.17696'
    },
    {
      currency: 'JPY',
      balance: '356.01377'
    }
  ]);
  quoine.get('/accounts/balance').reply(200, []);
}

export default nocksetup;
