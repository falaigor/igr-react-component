import React from 'react';
import { Color } from '../../constants/colors';
import Add from './Add';
import AddOutline from './AddOutline';
import Alarm from './Alarm';
import Archive from './Archive';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import Attachment from './Attachment';
import Axur from './Axur';
import AxurFilled from './AxurFilled';
import Block from './Block';
import BrandUse from './BrandUse';
import Bullet from './Bullet';
import Calendar from './Calendar';
import Chart from './Chart';
import ChartBars from './ChartBars';
import ChatBubble from './ChatBubble';
import CheckMark from './CheckMark';
import CheckMarkOutline from './CheckMarkOutline';
import ChevronDown from './ChevronDown';
import ChevronLeft from './ChevronLeft';
import ChevronRight from './ChevronRight';
import ChevronUp from './ChevronUp';
import Circle from './Circle';
import Clock from './Clock';
import Close from './Close';
import Company from './Company';
import Contains from './Contains';
import Copy from './Copy';
import Crown from './Crown';
import Currency from './Currency';
import Description from './Description';
import Desktop from './Desktop';
import DetectionHistory from './DetectionHistory';
import Detective from './Detective';
import DigitalFraud from './DigitalFraud';
import Domain from './Domain';
import DoubleCheckMark from './DoubleCheckMark';
import Download from './Download';
import Download2 from './Download2';
import DragHandler from './DragHandler';
import Edit from './Edit';
import Equal from './Equal';
import ExternalLink from './ExternalLink';
import Filter from './Filter';
import FilterOff from './FilterOff';
import Fire from './Fire';
import FireOutline from './FireOutline';
import FirstPage from './FirstPage';
import Flag from './Flag';
import FocusMode from './FocusMode';
import GraphDown from './GraphDown';
import GraphUp from './GraphUp';
import GreaterThan from './GreaterThan';
import GreaterThanOrEqual from './GreaterThanOrEqual';
import Heartbeat from './Heartbeat';
import Help from './Help';
import Host from './Host';
import Image from './Image';
import Incident from './Incident';
import Infinite from './Infinite';
import InformationLeakage from './InformationLeakage';
import Insight from './Insight';
import InsightAlt from './InsightAlt';
import InternalTreatment from './InternalTreatment';
import KeyArrowLeftHover from './KeyArrowLeftHover';
import KeyArrowLeftIdle from './KeyArrowLeftIdle';
import KeyArrowRightIdle from './KeyArrowRightIdle';
import KeyArrowLeftPressed from './KeyArrowLeftPressed';
import KeyEnterHover from './KeyEnterHover';
import KeyEnterIdle from './KeyEnterIdle';
import KeyEnterPressed from './KeyEnterPressed';
import Language from './Language';
import LastPage from './LastPage';
import LessThan from './LessThan';
import LessThanOrEqual from './LessThanOrEqual';
import Link from './Link';
import Locker from './Locker';
import Mail from './Mail';
import NotContain from './NotContain';
import NotEqual from './NotEqual';
import Notification from './Notification';
import Notify from './Notify';
import Oneshot from './Oneshot';
import Options from './Options';
import OverflowMenuSquare from './OverflowMenuSquare';
import Pause from './Pause';
import PlatformDiscord from './PlatformDiscord';
import PlatformFacebook from './PlatformFacebook';
import PlatformSkype from './PlatformSkype';
import PlatformTelegram from './PlatformTelegram';
import PlatformTwitter from './PlatformTwitter';
import PlatformWhatsapp from './PlatformWhatsapp';
import Play from './Play';
import Print from './Print';
import Product from './Product';
import Reopen from './Reopen';
import ReopenBack from './ReopenBack';
import Return from './Return';
import Robot from './Robot';
import Safelist from './Safelist';
import SalesAbuse from './SalesAbuse';
import Search from './Search';
import Settings from './Settings';
import Shield from './Shield';
import Sort from './Sort';
import SortAscDesc from './SortAscDesc';
import SortNewest from './SortNewest';
import SortOldest from './SortOldest';
import Sparkles from './Sparkles';
import Star from './Star';
import StarFilled from './StarFilled';
import Support from './Support';
import Tag from './Tag';
import Takedown from './Takedown';
import Threat from './Threat';
import Title from './Title';
import Trash from './Trash';
import TurnOff from './TurnOff';
import Unarchive from './Unarchive';
import Update from './Update';
import Upload from './Upload';
import User from './User';
import UserOff from './UserOff';
import Users from './Users';
import UserAdd from './UserAdd';
import View from './View';
import ViewOff from './ViewOff';
import Warning from './Warning';
import WarningFilled from './WarningFilled';
import WarningOutline from './WarningOutline';
import WarningOutlineAlt from './WarningOutlineAlt';
import World from './World';
import Zoom from './Zoom';
import Home from './Home';
import Building from './Building';

export const allIcons = [
  'add-outline',
  'add',
  'alarm',
  'archive',
  'arrow-left',
  'arrow-right',
  'attachment',
  'axur-filled',
  'axur',
  'block',
  'brand-use',
  'bullet',
  'calendar',
  'chart-bars',
  'chart',
  'chat-bubble',
  'check-mark-outline',
  'check-mark',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'circle',
  'clock',
  'close',
  'company',
  'contains',
  'copy',
  'crown',
  'currency',
  'description',
  'desktop',
  'detection-history',
  'detective',
  'digital-fraud',
  'domain',
  'double-check-mark',
  'download',
  'download2',
  'drag-handler',
  'edit',
  'equal',
  'external-link',
  'filter-off',
  'filter',
  'fire',
  'fire-outline',
  'first-page',
  'flag',
  'focus-mode',
  'graph-down',
  'graph-up',
  'greater-than-or-equal',
  'greater-than',
  'heartbeat',
  'help',
  'host',
  'image',
  'incident',
  'infinite',
  'information-leakage',
  'insight-alt',
  'insight',
  'internal-treatment',
  'key-arrow-left-hover',
  'key-arrow-left-idle',
  'key-arrow-left-pressed',
  'key-arrow-right-idle',
  'key-enter-hover',
  'key-enter-idle',
  'key-enter-pressed',
  'language',
  'last-page',
  'less-than-or-equal',
  'less-than',
  'link',
  'locker',
  'mail',
  'not-contain',
  'not-equal',
  'notification',
  'notify',
  'oneshot',
  'options',
  'overflow-menu-square',
  'pause',
  'platform-discord',
  'platform-facebook',
  'platform-skype',
  'platform-telegram',
  'platform-twitter',
  'platform-whatsapp',
  'play',
  'print',
  'product',
  'reopen',
  'reopen-back',
  'return',
  'robot',
  'safelist',
  'sales-abuse',
  'search',
  'settings',
  'shield',
  'sort',
  'sort-asc-desc',
  'sort-newest',
  'sort-oldest',
  'sparkles',
  'star-filled',
  'star',
  'support',
  'tag',
  'takedown',
  'threat',
  'title',
  'trash',
  'turn-off',
  'unarchive',
  'update',
  'upload',
  'user-off',
  'user',
  'users',
  'user-add',
  'view-off',
  'view',
  'warning-filled',
  'warning-outline-alt',
  'warning-outline',
  'warning',
  'world',
  'zoom',
  'home',
  'building'
] as const;

export type IconNames = typeof allIcons[number];

type IconComponentType = {
  [K in IconNames]: React.ElementType;
};

const mappedIconComponents: IconComponentType = {
  'add-outline': AddOutline,
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  'axur-filled': AxurFilled,
  'brand-use': BrandUse,
  'chart-bars': ChartBars,
  'chat-bubble': ChatBubble,
  'check-mark-outline': CheckMarkOutline,
  'check-mark': CheckMark,
  'chevron-down': ChevronDown,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  'chevron-up': ChevronUp,
  'detection-history': DetectionHistory,
  'digital-fraud': DigitalFraud,
  'double-check-mark': DoubleCheckMark,
  'drag-handler': DragHandler,
  'external-link': ExternalLink,
  'filter-off': FilterOff,
  'first-page': FirstPage,
  'focus-mode': FocusMode,
  'graph-down': GraphDown,
  'graph-up': GraphUp,
  'greater-than-or-equal': GreaterThanOrEqual,
  'greater-than': GreaterThan,
  'information-leakage': InformationLeakage,
  'insight-alt': InsightAlt,
  'internal-treatment': InternalTreatment,
  'key-arrow-left-hover': KeyArrowLeftHover,
  'key-arrow-left-idle': KeyArrowLeftIdle,
  'key-arrow-left-pressed': KeyArrowLeftPressed,
  'key-arrow-right-idle': KeyArrowRightIdle,
  'key-enter-hover': KeyEnterHover,
  'key-enter-idle': KeyEnterIdle,
  'key-enter-pressed': KeyEnterPressed,
  'last-page': LastPage,
  'less-than-or-equal': LessThanOrEqual,
  'less-than': LessThan,
  'not-contain': NotContain,
  'not-equal': NotEqual,
  'overflow-menu-square': OverflowMenuSquare,
  'platform-discord': PlatformDiscord,
  'platform-facebook': PlatformFacebook,
  'platform-skype': PlatformSkype,
  'platform-telegram': PlatformTelegram,
  'platform-twitter': PlatformTwitter,
  'platform-whatsapp': PlatformWhatsapp,
  'reopen-back': ReopenBack,
  'sales-abuse': SalesAbuse,
  'star-filled': StarFilled,
  'turn-off': TurnOff,
  'user-off': UserOff,
  'view-off': ViewOff,
  'warning-filled': WarningFilled,
  'warning-outline-alt': WarningOutlineAlt,
  'warning-outline': WarningOutline,
  add: Add,
  alarm: Alarm,
  archive: Archive,
  attachment: Attachment,
  axur: Axur,
  block: Block,
  bullet: Bullet,
  calendar: Calendar,
  chart: Chart,
  circle: Circle,
  clock: Clock,
  close: Close,
  company: Company,
  contains: Contains,
  copy: Copy,
  crown: Crown,
  currency: Currency,
  description: Description,
  desktop: Desktop,
  detective: Detective,
  domain: Domain,
  download: Download,
  download2: Download2,
  edit: Edit,
  equal: Equal,
  filter: Filter,
  fire: Fire,
  'fire-outline': FireOutline,
  flag: Flag,
  heartbeat: Heartbeat,
  help: Help,
  host: Host,
  image: Image,
  incident: Incident,
  infinite: Infinite,
  insight: Insight,
  language: Language,
  link: Link,
  locker: Locker,
  mail: Mail,
  notification: Notification,
  notify: Notify,
  oneshot: Oneshot,
  options: Options,
  pause: Pause,
  play: Play,
  print: Print,
  product: Product,
  reopen: Reopen,
  return: Return,
  robot: Robot,
  safelist: Safelist,
  search: Search,
  settings: Settings,
  shield: Shield,
  sort: Sort,
  'sort-asc-desc': SortAscDesc,
  'sort-newest': SortNewest,
  'sort-oldest': SortOldest,
  sparkles: Sparkles,
  star: Star,
  support: Support,
  tag: Tag,
  takedown: Takedown,
  threat: Threat,
  title: Title,
  trash: Trash,
  unarchive: Unarchive,
  update: Update,
  upload: Upload,
  user: User,
  users: Users,
  'user-add': UserAdd,
  view: View,
  warning: Warning,
  world: World,
  zoom: Zoom,
  home: Home,
  building: Building
};

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  name: IconNames;
  size?: number;
}

const Icon: React.FC<IconProps> = ({
  color = `rgb(${Color.L700})`,
  name,
  size = 16,
  ...rest
}) => {
  const SvgIcon = mappedIconComponents[name];
  return SvgIcon ? (
    <svg
      fill={color}
      height={size}
      version="1.1"
      viewBox="0 0 16 16"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <SvgIcon />
    </svg>
  ) : null;
};

export default Icon;
