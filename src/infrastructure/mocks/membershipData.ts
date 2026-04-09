import type { MembershipPlan, MembershipBenefit, MembershipArticle, MembershipTag } from '../../domain/entities/Membership';

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'beginning',
    name: 'Beginning Membership',
    nameKr: '비기닝 멤버십',
    price: 5000,
    period: '1개월',
    originalPrice: 5000,
    features: [
      '뉴스레터 (일요 영감 모음집) 주 1회 발송',
      '멤버십 전용 온라인 커뮤니티 초대',
      '멤버십 전용 프로그램 참여권 제공',
    ],
    isRecommended: false,
  },
  {
    id: 'achim',
    name: 'Achim Membership',
    nameKr: '아침 멤버십',
    price: 24000,
    period: '3개월',
    originalPrice: 8000,
    features: [
      '뉴스레터 (일요 영감 모음집) 주 1회 발송',
      '멤버십 전용 온라인 커뮤니티 초대',
      '멤버십 전용 프로그램 참여권 제공',
      '매거진 〈Achim〉 신간 정기 배송',
      '온오프라인 전 상품 7% 할인',
      '제휴 업체 최대 20% 할인',
      '멤버십 웰컴 키트 제공',
    ],
    isRecommended: true,
    periodOptions: [
      { label: '3개월', months: 3, price: 24000, originalPrice: 8000 },
      { label: '6개월', months: 6, price: 42000, originalPrice: 7000 },
    ],
  },
];

export const MEMBERSHIP_BENEFITS: MembershipBenefit[] = [
  {
    id: 1,
    title: '뉴스레터 (일요 영감 모음집) 주 1회 발송',
    description: '매주 일요일 아침 7시, Achim 디렉터 입점 콘텐츠 큐레이션과 브랜드 운영기를 엽합니다. 지난 모니터링 리포트를 전하는 새로운 영감과 이야기가 담겨 있어요.',
    linkText: '샘플 읽어보기',
    linkUrl: '#',
    illustration: '/images/benefit-newsletter.svg',
    direction: 'left',
  },
  {
    id: 2,
    title: '멤버십 전용 온라인 커뮤니티 초대',
    description: 'Achim 커뮤니티의 온라인 공간 \'ACC(Achim Community Center)\' 숙박으로 초대합니다. 다양해서 조성 오너들과 서로의 아침을 지켜하며 응기를 나눌 수 있어요!',
    linkText: 'ACC 몰래 구경하기',
    linkUrl: '#',
    illustration: '/images/benefit-community.svg',
    direction: 'right',
  },
  {
    id: 3,
    title: '멤버십 전용 프로그램 참여권 제공',
    description: '요가, 북클럽, 브랜드 앰시, 제품 체험 이벤트 등 아침을 더 건강하고 단단하게 만들어 줄 다양한 프로그램에 참여할 수 있습니다.',
    linkText: '대표 프로그램 \'해돋이\' 구경하기',
    linkUrl: '#',
    illustration: '/images/benefit-program.svg',
    direction: 'left',
  },
  {
    id: 4,
    title: '매거진 〈Achim〉 신간 정기 배송',
    description: '모닝 오너가 되면 3개월에 한 번 발행되는 매거진 〈Achim〉을 누구보다 빠르게 읽어 보실 수 있어요! *멤버십 가입 시점에 따라 매거진 수령 시기가 다를 수 있습니다.',
    linkText: '매거진 보기',
    linkUrl: '#',
    illustration: '/images/benefit-magazine.svg',
    direction: 'right',
  },
  {
    id: 5,
    title: '온오프라인 전 상품 7% 할인',
    description: 'Achim의 온라인 커머스 플랫폼 Achim 마트와 오프라인 공간 프로비전에서 모든 상품을 7% 할인가로 즐길 수 있습니다.',
    linkText: 'Achim 마트 구경하기',
    linkUrl: '#',
    illustration: '/images/benefit-discount.svg',
    direction: 'left',
  },
];

export const MEMBERSHIP_TAGS: MembershipTag[] = [
  { id: '1', label: 'All', slug: 'all' },
  { id: '2', label: 'Lifestyle', slug: 'lifestyle' },
  { id: '3', label: 'Wellness', slug: 'wellness' },
  { id: '4', label: 'Interview', slug: 'interview' },
  { id: '5', label: 'Essay', slug: 'essay' },
  { id: '6', label: 'Recipe', slug: 'recipe' },
];

export const MEMBERSHIP_ARTICLES: MembershipArticle[] = [
  {
    id: 'article-01',
    title: '나만의 모닝 루틴, 어떻게 시작할까?',
    subtitle: '작은 습관이 하루를 바꾸는 법',
    excerpt: '매일 아침 15분, 당신만을 위한 시간을 만들어보세요. 복잡한 루틴이 아니라 단 하나의 습관부터 시작하면 됩니다.',
    coverImage: '/images/cover-24.png',
    tags: ['lifestyle', 'wellness'],
    author: 'Achim 에디터',
    publishedAt: '2026.04.01',
    readTime: '5분',
    content: `<h2>아침은 하루의 첫 문장이다</h2>
<p>마르셀 프루스트는 "진정한 발견의 여행은 새로운 풍경을 찾는 것이 아니라, 새로운 시각으로 보는 것이다"라고 했습니다. 모닝 루틴도 마찬가지예요. 거창한 것이 아니라, 익숙한 아침을 새로운 시선으로 바라보는 것에서 시작합니다.</p>

<h3>Step 1: 알람 전에 깨어나기</h3>
<p>알람 없이 자연스럽게 눈을 뜨는 것. 이것이 가장 이상적인 시작이지만, 처음부터 가능한 사람은 드뭅니다. 먼저 취침 시간을 30분 앞당겨보세요.</p>

<h3>Step 2: 첫 15분은 나만의 시간</h3>
<p>핸드폰을 만지기 전, 창밖을 바라보거나, 차 한 잔을 내리거나, 짧은 명상을 해보세요. 이 15분이 하루의 톤을 결정합니다.</p>

<h3>Step 3: 기록하기</h3>
<p>모닝북에 오늘 하루 가장 기대되는 한 가지를 적어보세요. 그것이 출근길의 커피일 수도, 퇴근 후의 산책일 수도 있습니다.</p>

<blockquote>"매일 아침, 나는 나에게 가장 좋은 선물을 준다. 바로 고요한 시간." — Achim 모닝 오너 김서연</blockquote>`,
  },
  {
    id: 'article-02',
    title: '커피 한 잔의 온도, 그리고 대화',
    subtitle: '아침을 여는 따뜻한 의식',
    excerpt: '핸드드립 커피의 온도가 88도일 때, 가장 풍부한 향이 피어오릅니다. 그 시간에 나누는 대화도 마찬가지입니다.',
    coverImage: '/images/cover-23.png',
    tags: ['lifestyle', 'essay'],
    author: '김태영',
    publishedAt: '2026.03.15',
    readTime: '7분',
    content: `<h2>88도의 비밀</h2>
<p>커피를 내리는 가장 이상적인 온도. 그것은 끓는 물도, 미지근한 물도 아닌 88도입니다. 너무 뜨거우면 쓴맛이 강해지고, 너무 차가우면 향이 살아나지 않죠.</p>

<p>아침 대화도 같습니다. 너무 무거운 주제는 하루를 짓누르고, 너무 가벼운 인사는 기억에 남지 않습니다. 88도의 대화 — 적당히 따뜻하고, 여운이 남는 그런 대화를 나눠보세요.</p>

<h3>드립의 기술</h3>
<p>물줄기는 가늘게, 원을 그리며, 천천히. 첫 번째 뜸을 들인 후 30초를 기다리세요. 커피 가루가 부풀어 오르며 향을 품기 시작합니다.</p>

<blockquote>"좋은 아침은 좋은 커피에서 시작되고, 좋은 커피는 기다림에서 시작된다."</blockquote>`,
  },
  {
    id: 'article-03',
    title: 'Interview: 일러스트레이터 박소민',
    subtitle: '선 하나에 담기는 아침의 풍경',
    excerpt: '매일 아침 6시, 그녀는 연필 한 자루로 하루를 시작합니다. 20년간 그려온 아침 풍경 이야기.',
    coverImage: '/images/cover-22.png',
    tags: ['interview'],
    author: 'Achim 에디터',
    publishedAt: '2026.02.28',
    readTime: '10분',
    content: `<h2>아침 6시의 연필</h2>
<p><strong>Q. 매일 아침 그림을 그리신다고 들었어요.</strong></p>
<p>네, 20년 전부터의 습관이에요. 처음엔 스케치북에, 지금은 아이패드에. 도구는 바뀌었지만, 아침 6시에 첫 선을 긋는 것은 변하지 않았어요.</p>

<p><strong>Q. 아침에 그리는 그림이 특별한 이유가 있나요?</strong></p>
<p>아침의 빛은 다른 시간대와 완전히 달라요. 부드럽고, 따뜻하고, 아직 세상에 물들지 않은 순수한 빛이죠. 그 빛을 잡아두고 싶어서 아침에 그려요.</p>

<p><strong>Q. Achim 독자들에게 한마디 해주세요.</strong></p>
<p>완벽한 아침은 없어요. 다만 '나만의 아침'이 있을 뿐이에요. 남들의 모닝 루틴을 따라하기보다, 자신만의 리듬을 찾아보세요.</p>`,
  },
  {
    id: 'article-04',
    title: '봄 아침에 어울리는 식탁',
    subtitle: '제철 재료로 차리는 간단한 브런치',
    excerpt: '쑥, 달래, 냉이... 봄나물로 만드는 건강하고 아름다운 아침 식탁을 소개합니다.',
    coverImage: '/images/cover-21.png',
    tags: ['recipe', 'lifestyle'],
    author: '이하늘',
    publishedAt: '2026.02.10',
    readTime: '6분',
    content: `<h2>봄의 맛, 아침에 만나다</h2>
<p>봄은 맛으로 시작됩니다. 시장에 봄나물이 나오기 시작하면, 그것이야말로 진짜 봄이 온 신호죠.</p>

<h3>🌿 쑥 리코타 토스트</h3>
<p>재료: 사워도우 빵, 리코타 치즈, 데친 쑥, 올리브 오일, 소금, 레몬 제스트<br/>
사워도우 빵을 노릇하게 구워 리코타를 듬뿍 바르고, 잘게 썬 쑥을 올려주세요. 마지막에 올리브 오일을 살짝 두르고 레몬 제스트를 뿌리면 완성!</p>

<h3>🌸 달래 계란말이</h3>
<p>재료: 달걀 3개, 달래 한 줌, 참기름, 소금<br/>
달걀을 잘 풀어 잘게 썬 달래와 참기름을 넣고 돌돌 말아주세요. 도시락 반찬으로도 그만입니다.</p>

<blockquote>"제철 재료는 그 자체로 완성된 레시피입니다."</blockquote>`,
  },
  {
    id: 'article-05',
    title: '고요함이 주는 에너지',
    subtitle: '아침 명상과 마음 챙김',
    excerpt: '하루 5분의 명상이 당신의 하루를 어떻게 바꿀 수 있는지, 과학적 근거와 함께 소개합니다.',
    coverImage: '/images/cover-24.png',
    tags: ['wellness'],
    author: '정은채',
    publishedAt: '2026.01.25',
    readTime: '8분',
    content: `<h2>5분의 고요, 하루의 힘</h2>
<p>하버드 의대 연구에 따르면, 매일 5분의 명상만으로도 스트레스 호르몬인 코르티솔 수치가 23% 감소합니다. 아침 명상은 단순한 트렌드가 아니라 과학입니다.</p>

<h3>초보자를 위한 아침 명상법</h3>
<ol>
<li><strong>자세:</strong> 편안하게 앉아 등을 곧게 펴세요</li>
<li><strong>호흡:</strong> 코로 4초간 들이쉬고, 7초간 참고, 8초간 내쉬세요</li>
<li><strong>집중:</strong> 떠오르는 생각을 판단하지 말고 흘려보내세요</li>
</ol>

<p>처음엔 1분도 길게 느껴질 거예요. 하지만 일주일만 지속하면, 그 5분이 하루 중 가장 기다려지는 시간이 됩니다.</p>

<blockquote>"명상은 아침을 여는 열쇠가 아니라, 아침 그 자체입니다." — 틱낫한</blockquote>`,
  },
  {
    id: 'article-06',
    title: '산책자의 아침 에세이',
    subtitle: '걸으며 생각하고, 멈추며 기록하다',
    excerpt: '새벽 공기를 마시며 동네 한 바퀴를 도는 것. 그것이 나의 가장 값진 글감이 됩니다.',
    coverImage: '/images/cover-22.png',
    tags: ['essay'],
    author: '윤서준',
    publishedAt: '2026.01.10',
    readTime: '6분',
    content: `<h2>걷기의 철학</h2>
<p>프리드리히 니체는 "위대한 생각은 모두 걸으면서 떠올랐다"고 했습니다. 나의 아침 산책도 그렇습니다. 거창한 깨달음이 아니라, 오늘 하루를 살아갈 작은 용기를 찾는 시간.</p>

<p>새벽 5시 30분, 아직 세상이 잠든 시간. 골목길의 고양이와 눈을 마주치고, 빵집의 첫 번째 향기를 맡고, 학교 운동장을 가로지르며 어제의 걱정을 내려놓습니다.</p>

<h3>오늘의 기록</h3>
<p><em>4월의 벚꽃은 유난히 빨리 진다. 그래서 더 아름답다. 사라질 것을 알기에 더 열심히 피어나는 것들이 있다. 오늘의 나도 그래야지.</em></p>

<blockquote>"아침 산책은 세상에서 가장 정직한 대화입니다. 나와 나 사이의."</blockquote>`,
  },
];
