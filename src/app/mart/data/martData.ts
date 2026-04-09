export interface MartItem {
  id: string;
  title: string;
  category: string;
  date: string;
  price?: string;
  image: string;
  tags: string[];
  description: string;
  status?: 'NEW' | 'SOLD OUT' | 'LIMITED';
  content: string;
}

export const MART_ITEMS: MartItem[] = [
  {
    id: 'mart-01',
    title: 'Achim Magazine Vol.20 "Routine"',
    category: 'MAGAZINE',
    date: '2026.04.10',
    price: '₩18,000',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
    tags: ['Achim', 'Magazine', 'Paper'],
    status: 'NEW',
    description: '우리의 일상을 지탱하는 루틴에 대한 이야기입니다.',
    content: `아침의 시작은 언제나 루틴으로부터 옵니다. 우리는 왜 매일 같은 일을 반복하면서도 매번 새로운 발견을 할까요? 이번 호에서는 당신의 아침을 더 풍요롭게 만들 10가지 루틴을 소개합니다.
    
    이번 잡지는 한정판으로 제작되었으며, 아침 특유의 포근한 질감을 느낄 수 있는 친환경 종이를 사용했습니다.`
  },
  {
    id: 'mart-02',
    title: 'Morning Brew: Organic Coffee Beans',
    category: 'LIVING',
    date: '2026.03.25',
    price: '₩24,000',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
    tags: ['Coffee', 'Living', 'Organic'],
    description: '아침의 공기를 깨우는 고소한 향기.',
    content: `에티오피아의 고산지대에서 정성스럽게 재배된 유기농 원두입니다. 산미가 적고 고소한 맛이 일품이며, 아침 식사와 가장 잘 어울리는 밸런스를 가지고 있습니다.`
  },
  {
    id: 'mart-03',
    title: 'Linen Kitchen Towel (Set of 3)',
    category: 'LIVING',
    date: '2026.03.15',
    price: '₩32,000',
    image: 'https://images.unsplash.com/photo-1510443900742-02e0b533a016?auto=format&fit=crop&q=80&w=800',
    tags: ['Kitchen', 'Living', 'Linen'],
    status: 'SOLD OUT',
    description: '부드러운 촉감과 빠른 건조 성능을 자랑합니다.',
    content: `리넨 소재 특유의 시원함과 흡수성을 느껴보세요. 식탁 위에서도, 주방에서도 아침의 정갈함을 더해줍니다.`
  },
  {
    id: 'mart-04',
    title: 'Achim Ceramic Mug',
    category: 'OBJECT',
    date: '2026.02.20',
    price: '₩22,000',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=800',
    tags: ['Ceramic', 'Mug', 'Achim'],
    description: '한 손에 쏙 들어오는 따뜻한 온기.',
    content: `직접 손으로 빚어낸 듯한 자연스러운 곡선이 특징인 세라믹 머그입니다. 투박한 듯 정교한 마감 처리가 돋보입니다.`
  },
  {
    id: 'mart-05',
    title: 'Handmade Wooden Bookmark',
    category: 'READING',
    date: '2026.01.10',
    price: '₩12,000',
    image: 'https://images.unsplash.com/photo-1544822688-c6f14d950bc6?auto=format&fit=crop&q=80&w=800',
    tags: ['Reading', 'Wooden', 'Handmade'],
    status: 'LIMITED',
    description: '책장 사이 머무는 나무의 향.',
    content: `한 권의 책을 끝낼 때까지 곁에 머물러 줄 소중한 도구입니다. 월넛 목재를 사용하여 시간이 지날수록 깊어지는 색감을 즐길 수 있습니다.`
  },
  {
    id: 'mart-06',
    title: 'Organic Scented Candle: Forest',
    category: 'LIVING',
    date: '2025.12.20',
    price: '₩28,000',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800',
    tags: ['Candle', 'Living', 'Scent'],
    description: '숲속의 아침을 닮은 상쾌한 향.',
    content: `소이 왁스와 천연 에센셜 오일만을 사용하여 제작되었습니다. 공간을 가득 채우는 숲의 향기가 당신의 명상 시간을 더 깊게 만들어줍니다.`
  }
];
