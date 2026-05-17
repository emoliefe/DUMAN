import type { Service, Package, Testimonial, ProcessStep, FAQItem } from '@/types'

export const SERVICES: Service[] = [
  {
    id: 'ic-temizlik',
    icon: '🚗',
    title: 'Araç İçi Detaylı Temizlik',
    description: 'Koltuk, tavan, kapı döşemesi, göğüslük ve taban halısı dahil derinlemesine iç temizlik.',
    badge: 'En Popüler',
  },
  {
    id: 'koltuk-yikama',
    icon: '🛋️',
    title: 'Araç Koltuk Yıkama',
    description: 'Kumaş ve deri koltuklarda profesyonel ekipmanlarla derin temizlik ve hijyen.',
  },
  {
    id: 'ev-koltuk',
    icon: '🏠',
    title: 'Ev Koltuk Yıkama',
    description: 'Ev ve ofis koltuk, kanepe ve köşe takımlarını yerinde temizleme hizmeti.',
  },
  {
    id: 'pasta-cila',
    icon: '✨',
    title: 'Pasta & Cila',
    description: 'Araç dış yüzeyindeki çizik ve matlaşmayı gideren profesyonel pasta ve cila işlemi.',
  },
  {
    id: 'seramik',
    icon: '🔬',
    title: 'Seramik Kaplama',
    description: 'Uzun ömürlü koruma için nano seramik kaplama — boya, UV ve çevre etkilerine karşı zırh.',
  },
  {
    id: 'dezenfeksiyon',
    icon: '🦠',
    title: 'Dezenfeksiyon',
    description: 'Bakteri, alerjen ve virüsleri yok eden profesyonel araç dezenfeksiyon işlemi.',
  },
]

export const PACKAGES: Package[] = [
  {
    id: 'standard',
    name: 'Standart',
    price: 'İletişime Geçin',
    priceNote: 'Araç tipine göre fiyat belirlenir',
    highlighted: false,
    cta: 'WhatsApp\'tan Fiyat Al',
    features: [
      { label: 'Araç iç süpürge', included: true },
      { label: 'Torpido ve kapı temizliği', included: true },
      { label: 'Cam temizliği', included: true },
      { label: 'Koltuk yıkama', included: false },
      { label: 'Tavan temizliği', included: false },
      { label: 'Bagaj temizliği', included: false },
      { label: 'Pasta cila', included: false },
      { label: 'Seramik kaplama', included: false },
    ],
  },
  {
    id: 'mid',
    name: 'Orta Sınıf',
    price: 'İletişime Geçin',
    priceNote: 'Araç tipine göre fiyat belirlenir',
    highlighted: false,
    cta: 'WhatsApp\'tan Fiyat Al',
    features: [
      { label: 'Araç iç süpürge', included: true },
      { label: 'Torpido ve kapı temizliği', included: true },
      { label: 'Cam temizliği', included: true },
      { label: 'Koltuk yıkama', included: true },
      { label: 'Tavan temizliği', included: true },
      { label: 'Bagaj temizliği', included: true },
      { label: 'Pasta cila', included: false },
      { label: 'Seramik kaplama', included: false },
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 'İletişime Geçin',
    priceNote: 'Araç tipine göre fiyat belirlenir',
    highlighted: true,
    badge: 'Önerilen',
    cta: 'Hemen Randevu Al',
    features: [
      { label: 'Araç iç süpürge', included: true },
      { label: 'Torpido ve kapı temizliği', included: true },
      { label: 'Cam temizliği', included: true },
      { label: 'Koltuk yıkama', included: true },
      { label: 'Tavan temizliği', included: true },
      { label: 'Bagaj temizliği', included: true },
      { label: 'Pasta cila', included: true },
      { label: 'Seramik kaplama', included: true },
    ],
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmet Y.',
    initials: 'AY',
    rating: 5,
    text: 'Aracım sigara içilmiş gibi kokuyordu. Duman Detay\'dan sonra sıfır araç gibi oldu. Hem görüntü hem koku mükemmel. Kesinlikle tavsiye ediyorum.',
    service: 'Araç İçi Premium Temizlik',
    date: 'Ocak 2025',
  },
  {
    id: '2',
    name: 'Fatma K.',
    initials: 'FK',
    rating: 5,
    text: 'Çocuklarımın koltukları mahvetmesinden sonra umudum kalmamıştı. Ekip hem hızlı hem de son derece özenli çalıştı. Koltuklarım yeni gibi görünüyor!',
    service: 'Koltuk Yıkama',
    date: 'Şubat 2025',
  },
  {
    id: '3',
    name: 'Murat D.',
    initials: 'MD',
    rating: 5,
    text: 'Filo araçlarımı düzenli olarak Duman Detay\'a getiriyorum. Fiyat/performans dengesi mükemmel. Her seferinde aynı kalite.',
    service: 'Filo Araç Temizlik',
    date: 'Mart 2025',
  },
  {
    id: '4',
    name: 'Selin A.',
    initials: 'SA',
    rating: 5,
    text: 'Ev koltuğum için çok endişeliydim çünkü çok büyüktü. Yerinde temizlik hizmeti harika! Koltuk mükemmel temizlendi.',
    service: 'Ev Koltuk Yıkama',
    date: 'Nisan 2025',
  },
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    icon: '📱',
    title: 'Randevu Al',
    description: 'WhatsApp üzerinden hızlıca iletişime geçin, size en uygun zamanı belirleyelim.',
  },
  {
    step: 2,
    icon: '🚗',
    title: 'Aracı Teslim Edin',
    description: 'Aracınızı belirlenen saatte işletmemize teslim edin veya adresinize gelelim.',
  },
  {
    step: 3,
    icon: '✨',
    title: 'Detaylı Temizlik',
    description: 'Uzman ekibimiz profesyonel ekipmanlarla aracınıza özel işlem uygular.',
  },
  {
    step: 4,
    icon: '🏆',
    title: 'Yenilenmiş Teslim',
    description: 'Aracınız ilk günkü tazeliğiyle, koku ve kirden arındırılmış şekilde teslim edilir.',
  },
]

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Araç temizliği ne kadar sürer?',
    answer: 'Standart iç temizlik 2-3 saat, kapsamlı premium paket 4-6 saat arasında tamamlanır. Araç tipi ve kirliliğine göre değişiklik gösterebilir.',
  },
  {
    question: 'Araç koltuklarım yıkandıktan sonra ne zaman kurur?',
    answer: 'Profesyonel ekipmanlarımız sayesinde koltuklarınız 3-4 saat içinde kurur. Hava koşullarına göre süre değişebilir, araçta bırakmanızı öneririz.',
  },
  {
    question: 'Sigara kokusu gerçekten çıkar mı?',
    answer: 'Evet, özel ozon ve koku giderici ürünlerimizle sigara kokusu tamamen yok edilir. Bu konuda çok başarılı sonuçlar almaktayız.',
  },
  {
    question: 'Ev koltuğunu yerinde temizleyebilir misiniz?',
    answer: 'Evet, ev koltuk yıkama hizmetimizi adresinizde gerçekleştiriyoruz. Ekip ve ekipmanımızla size geliyoruz.',
  },
  {
    question: 'Hangi bölgelere hizmet veriyorsunuz?',
    answer: 'Ağırlıklı olarak İzmir Buca ve çevre ilçelere hizmet veriyoruz. Detaylar için WhatsApp\'tan iletişime geçin.',
  },
  {
    question: 'Seramik kaplama ne kadar dayanır?',
    answer: 'Uygulanan seramik kaplama kullanım koşullarına göre 2-5 yıl arasında dayanır. Düzenli bakımla ömrü uzatılabilir.',
  },
  {
    question: 'Fiyatlar nasıl belirleniyor?',
    answer: 'Fiyatlar araç tipi, büyüklüğü ve istenen hizmete göre belirlenmektedir. Kesin fiyat için WhatsApp\'tan bilgi alabilirsiniz.',
  },
]
