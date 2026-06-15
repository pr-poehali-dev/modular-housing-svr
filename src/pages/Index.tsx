import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const PROJECTS = [
  {
    title: 'NORDIC 36',
    area: '36 м²',
    price: 'от 1 290 000 ₽',
    tag: 'Студия',
    img: 'https://cdn.poehali.dev/projects/4ff8d8ad-8ef5-4693-a49c-170ec4ce4f16/files/dbda64c5-36fe-4319-abe5-f50db4f31207.jpg',
  },
  {
    title: 'CLIFF 72',
    area: '72 м²',
    price: 'от 2 850 000 ₽',
    tag: '2 модуля',
    img: 'https://cdn.poehali.dev/projects/4ff8d8ad-8ef5-4693-a49c-170ec4ce4f16/files/089d779a-2da8-4e06-95d0-09a811a0e191.jpg',
  },
  {
    title: 'COMPACT 28',
    area: '28 м²',
    price: 'от 990 000 ₽',
    tag: 'Tiny House',
    img: 'https://cdn.poehali.dev/projects/4ff8d8ad-8ef5-4693-a49c-170ec4ce4f16/files/49adeba7-8f56-41f7-9e42-c525d536f189.jpg',
  },
];

const SERVICES = [
  { icon: 'PenTool', title: 'Проектирование', desc: '3D-модель и планировка с учётом ваших пожеланий и участка.' },
  { icon: 'Factory', title: 'Изготовление', desc: 'Сборка модуля на производстве за 20–40 дней под контролем ОТК.' },
  { icon: 'Truck', title: 'Доставка', desc: 'Транспортировка готового дома в любую точку региона.' },
  { icon: 'Wrench', title: 'Монтаж', desc: 'Установка на фундамент и подключение коммуникаций за 1 день.' },
];

const ADVANTAGES = [
  { icon: 'ShieldCheck', title: 'Гарантия качества', desc: 'Официальная гарантия 5 лет на конструкцию и сертифицированные материалы.' },
  { icon: 'Zap', title: 'Скорость', desc: 'Готовый дом под ключ за 30–45 дней вместо года стройки.' },
  { icon: 'Boxes', title: 'Простота установки', desc: 'Не нужен капитальный фундамент. Дом готов к заселению сразу.' },
  { icon: 'CreditCard', title: 'Кредитование', desc: 'Рассрочка и кредит от банков-партнёров. Одобрение за 1 день.' },
];

const STATS = [
  { value: '180+', label: 'домов построено' },
  { value: '30', label: 'дней средний срок' },
  { value: '5', label: 'лет гарантии' },
  { value: '100%', label: 'договор и смета' },
];

const ARTICLES = [
  { tag: 'Технологии', title: 'Почему дома из металлокаркаса — это будущее загородного жилья', date: '12 июня 2026' },
  { tag: 'Гайд', title: 'Как выбрать дом из металлокаркаса: 7 ключевых критериев', date: '4 июня 2026' },
  { tag: 'Тренды', title: 'Энергоэффективность металлокаркасных домов в 2026 году', date: '28 мая 2026' },
];

const FAQ = [
  { q: 'Сколько времени занимает изготовление дома?', a: 'В среднем от 30 до 45 дней с момента подписания договора, включая производство, доставку и монтаж.' },
  { q: 'Нужен ли фундамент для дома из металлокаркаса?', a: 'Капитальный фундамент не требуется. Достаточно винтовых свай или бетонных блоков — это экономит время и деньги.' },
  { q: 'Можно ли оформить кредит или рассрочку?', a: 'Да, мы работаем с банками-партнёрами. Доступны рассрочка и ипотечные программы с одобрением за один день.' },
  { q: 'Какая гарантия на дом?', a: 'Мы даём официальную гарантию 5 лет на металлокаркасную конструкцию и используем только сертифицированные материалы.' },
  { q: 'Можно ли жить в таком доме зимой?', a: 'Да, все дома утепляются по нормам для круглогодичного проживания и подходят для любого климата России.' },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    { label: 'Проекты', href: '#projects' },
    { label: 'Услуги', href: '#services' },
    { label: 'О компании', href: '#about' },
    { label: 'Статьи', href: '#articles' },
    { label: 'Вопросы', href: '#faq' },
    { label: 'Контакты', href: '#contacts' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="font-display text-2xl font-bold tracking-tight">
            SVR<span className="text-primary">GROUP</span>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <Button asChild className="hidden lg:inline-flex font-display tracking-wide">
            <a href="#order">ЗАКАЗАТЬ</a>
          </Button>
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
            <div className="container py-4 flex flex-col gap-3">
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="py-1 text-muted-foreground hover:text-primary">
                  {n.label}
                </a>
              ))}
              <Button asChild className="mt-2"><a href="#order" onClick={() => setMenuOpen(false)}>ЗАКАЗАТЬ</a></Button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${PROJECTS[0].img})`, opacity: 0.35 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] animate-pulse" />

        <div className="container relative z-10 py-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/5 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs tracking-widest text-primary uppercase">Модульное домостроение из металлокаркаса</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] max-w-4xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
            ДОМА ИЗ МЕТАЛЛОКАРКАСА <span className="text-primary text-glow">ПОД КЛЮЧ</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Проектируем, производим и устанавливаем готовые дома из металлокаркаса за 30 дней. С гарантией качества и возможностью кредитования.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button asChild size="lg" className="font-display tracking-wider text-base h-14 px-8">
              <a href="#order"><Icon name="Rocket" className="mr-2" size={20} />РАССЧИТАТЬ ДОМ</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-display tracking-wider text-base h-14 px-8 border-primary/40">
              <a href="#projects"><Icon name="LayoutGrid" className="mr-2" size={20} />СМОТРЕТЬ ПРОЕКТЫ</a>
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {STATS.map((s) => (
              <div key={s.label} className="border-l-2 border-primary/40 pl-4">
                <div className="font-display text-4xl font-bold text-primary">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-24 border-t border-border">
        <div className="container">
          <SectionTitle eyebrow="Почему SVR GROUP" title="Преимущества, которые видно сразу" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {ADVANTAGES.map((a) => (
              <div key={a.title} className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:border-glow">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon name={a.icon} size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 border-t border-border relative">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container relative">
          <SectionTitle eyebrow="Портфолио / 3D-визуализация" title="Готовые проекты из металлокаркаса" />
          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {PROJECTS.map((p) => (
              <div key={p.title} className="tilt-card group rounded-2xl overflow-hidden bg-card border border-border cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-background/80 backdrop-blur border border-primary/40 text-primary">
                    {p.tag}
                  </span>
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon name="Box" size={22} className="text-primary-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl font-semibold">{p.title}</h3>
                    <span className="text-sm text-muted-foreground">{p.area}</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-primary font-display text-lg">{p.price}</span>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      3D-тур <Icon name="ArrowUpRight" size={16} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="font-display tracking-wider border-primary/40">
              <Icon name="Grid3x3" className="mr-2" size={18} />ВСЯ ГАЛЕРЕЯ ОБЪЕКТОВ
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 border-t border-border">
        <div className="container">
          <SectionTitle eyebrow="Полный цикл" title="Услуги от идеи до новоселья" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {SERVICES.map((s, i) => (
              <div key={s.title} className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                <span className="absolute top-6 right-6 font-display text-5xl font-bold text-border">0{i + 1}</span>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon name={s.icon} size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 border-t border-border relative overflow-hidden">
        <div className="absolute -left-40 top-20 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="container relative grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle eyebrow="О компании" title="История, команда и качество" align="left" />
            <p className="mt-8 text-muted-foreground leading-relaxed">
              SVR GROUP — производственная компания, которая с 2015 года строит модульные дома из металлокаркаса. Мы прошли путь от мастерской до собственного производства полного цикла.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Наша команда — инженеры, архитекторы и монтажники с опытом более 10 лет. Каждый дом проходит контроль качества и сопровождается полным пакетом документов.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Наши конструкции прошли проверку сибирскими морозами до −50°C. Металлокаркас не деформируется, не трескается и сохраняет тепло даже в условиях экстремального климата — это не слова, а подтверждённый опыт эксплуатации в Сибири и на Урале.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              {['ISO 9001', 'Сертификат ОТК', 'Договор и смета', 'Гарантия 5 лет'].map((b) => (
                <span key={b} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm">
                  <Icon name="BadgeCheck" size={16} className="text-primary" />{b}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={PROJECTS[0].img} alt="Объект" className="rounded-2xl border border-border w-full h-full object-cover animate-float-slow" />
            <img src={PROJECTS[1].img} alt="Объект" className="rounded-2xl border border-border w-full h-full object-cover mt-8 animate-float-slow" style={{ animationDelay: '1.5s' }} />
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section id="articles" className="py-24 border-t border-border">
        <div className="container">
          <SectionTitle eyebrow="Блог" title="Статьи о строительстве из металлокаркаса" />
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {ARTICLES.map((a) => (
              <article key={a.title} className="group p-7 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors cursor-pointer">
                <span className="text-xs uppercase tracking-wider text-primary">{a.tag}</span>
                <h3 className="font-display text-xl font-semibold mt-4 leading-snug group-hover:text-primary transition-colors">{a.title}</h3>
                <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
                  <span>{a.date}</span>
                  <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 border-t border-border">
        <div className="container max-w-3xl">
          <SectionTitle eyebrow="FAQ" title="Часто задаваемые вопросы" />
          <Accordion type="single" collapsible className="mt-12">
            {FAQ.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="font-display text-lg text-left hover:text-primary hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ORDER / CONTACTS */}
      <section id="order" className="py-24 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[140px]" />
        <div id="contacts" className="container relative grid lg:grid-cols-2 gap-16">
          <div>
            <SectionTitle eyebrow="Связаться" title="Оставьте заявку на расчёт" align="left" />
            <p className="mt-6 text-muted-foreground max-w-md">
              Заполните форму — менеджер свяжется с вами в течение 30 минут, подготовит расчёт и подберёт проект под ваш бюджет.
            </p>
            <div className="mt-10 space-y-5">
              <ContactRow icon="Phone" label="Телефон" value="+7 (900) 000-00-00" />
              <ContactRow icon="Mail" label="Email" value="info@svrgroup.ru" />
              <ContactRow icon="MapPin" label="Производство" value="г. Москва, Промзона 1, стр. 4" />
              <ContactRow icon="Clock" label="Режим работы" value="Ежедневно 9:00 – 20:00" />
            </div>
            <div className="mt-10 p-5 rounded-xl bg-card border border-border text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-1">Реквизиты</p>
              ООО «СВР ГРУПП» · ИНН 7700000000 · ОГРН 1157700000000
            </div>
          </div>

          <form className="p-8 rounded-2xl bg-card border border-border border-glow self-start" onSubmit={(e) => e.preventDefault()}>
            <h3 className="font-display text-2xl font-semibold mb-6">Форма заказа</h3>
            <div className="space-y-4">
              <Input placeholder="Ваше имя" className="h-12 bg-background" />
              <Input placeholder="Телефон" className="h-12 bg-background" />
              <Input placeholder="Email" className="h-12 bg-background" />
              <Textarea placeholder="Какой проект интересует?" className="bg-background min-h-28" />
              <Button className="w-full font-display tracking-wider text-base h-12">
                <Icon name="Send" className="mr-2" size={18} />ОТПРАВИТЬ ЗАЯВКУ
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="font-display text-2xl font-bold">SVR<span className="text-primary">GROUP</span></a>
          <p className="text-sm text-muted-foreground">© 2026 SVR GROUP · Модульные дома из металлокаркаса под ключ</p>
          <div className="flex gap-3">
            {['Send', 'Instagram', 'Youtube'].map((ic) => (
              <a key={ic} href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:text-primary transition-colors">
                <Icon name={ic} size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

const SectionTitle = ({ eyebrow, title, align = 'center' }: { eyebrow: string; title: string; align?: 'center' | 'left' }) => (
  <div className={align === 'center' ? 'text-center max-w-2xl mx-auto' : ''}>
    <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary mb-4">{eyebrow}</span>
    <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">{title}</h2>
  </div>
);

const ContactRow = ({ icon, label, value }: { icon: string; label: string; value: string }) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
      <Icon name={icon} size={22} className="text-primary" />
    </div>
    <div>
      <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  </div>
);

export default Index;