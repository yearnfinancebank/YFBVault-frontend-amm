import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.yearnfbank.finance/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: ''
  },
  {
    label: 'Nests',
    icon: 'PoolIcon',
    href: ''
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.goosedefi.com/lottery'
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x55611cfF96F5D149fC6ccc25D2336De716d98C4a',
      },
      {
        label: 'CoinMarketCap',
        href: '',
      },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/yearnfinancebank",
      },
      {
        label: "Docs",
        href: "",
      },
      {
        label: "Blog",
        href: "",
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'GooseIcon',
    href: '',
  },
  {
    label: 'Audit by Hacken',
    icon: 'AuditIcon',
    href: '',
  },
  {
    label: 'Audit by CertiK',
    icon: 'AuditIcon',
    href: '',
  },
]

export default config
