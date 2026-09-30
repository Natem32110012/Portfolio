import { aiWorkIds, appWorkIds, gameWorkIds, ugcWorkIds, type WorkId } from "@/content/site";
import type { DeepPartial, Dictionary, WorkCopy } from "@/locales/types";

function numberedCopies(ids: readonly WorkId[], caption: string) {
  return Object.fromEntries(
    ids.map((id, index) => {
      const title = `${String(index + 1).padStart(2, "0")}-Kreatif`;
      const copy: WorkCopy = {
        title,
        caption,
        role: "Pazarlama Sanatçısı",
        result: "",
        alt: title,
      };
      return [id, copy];
    }),
  );
}

const tr: DeepPartial<Dictionary> = {
  meta: {
    title: "Seçkin Güneri — Pazarlama Sanatçısı",
    description:
      "Mobil oyunlar için performans odaklı UA kreatifleri. Video reklamlar, oynanabilir reklamlar, statik bannerlar, mağaza görselleri ve hareketli grafikler. İstanbul.",
  },
  header: {
    work: "Çalışmalarım",
    language: "Dil",
    skip: "İçeriğe atla",
  },
  hero: {
    role: "Pazarlama Sanatçısı",
    location: "İstanbul",
    positioning: "Mobil oyunlar ve oyun dışı ürünler için performans odaklı UA kreatifleri",
    status: "Yeni fırsatlara açığım",
    explore: "Çalışmalarımı keşfet",
    viewAll: "Tümünü gör",
    portraitLabel: "Portre",
  },
  about: {
    heading: "Hakkımda",
    paragraphs: [
      [
        {
          text: "Okan Üniversitesi Grafik Tasarım mezunuyum. Kariyerime farklı sektörlerde serbest tasarımcı olarak başladım. Ardından NFT oyun alanına geçtim ve burada topluluk yöneticisi ve sanatçı olarak deneyim kazandım.",
        },
      ],
      [
        { text: "Daha sonra mobil uygulama sektöründe pazarlama sanatçısı olarak " },
        { text: "7Apps", strong: true },
        {
          text: " ekibine katıldım ve jr. pazarlama uzmanı rolüne yükseldim. Bu dönemde uygulamamız ",
        },
        { text: "Banger: AI Cover Songs & Music", strong: true },
        { text: "’i " },
        { text: "ABD App Store Müzik kategorisinde 5. sıraya", strong: true },
        { text: " taşımada rol aldım." },
      ],
      [
        { text: "Ardından " },
        { text: "Voyager", strong: true },
        {
          text: "’da iki yıl geçirdim ve farklı türlerdeki mobil oyunlar için performans odaklı reklam kreatifleri ürettim. En son ",
        },
        { text: "PlayableX", strong: true },
        {
          text: "’te yapay zekâ destekli video üretimi ve çeşitli oyun türleri için kreatif konseptler üzerine çalıştım.",
        },
      ],
      [
        { text: "Sonuç üreten işler için " },
        { text: "tasarım, pazarlama ve yapay zekâyı", strong: true },
        {
          text: " bir araya getirmeyi seviyorum. Merak, sürekli öğrenme ve yeni fikirlerle teknolojileri denemek beni ayakta tutuyor.",
        },
      ],
    ],
  },
  contact: {
    linkedin: "LinkedIn",
    cv: "CV indir",
    certificate: "Google Sertifikası",
    certificateCaption: "Dijital Pazarlamanın Temelleri · Google Dijital Atölye · 2022",
    certificateAlt: "Seçkin Güneri için Google Dijital Atölye sertifikası",
  },
  stats: {
    years: "Deneyim yılı",
    projects: "Çalıştığım uygulamalar",
    games: "Çalıştığım oyunlar",
  },
  experience: {
    heading: "Deneyim",
    items: {
      playablex: {
        company: "PlayableX",
        meta: "Tam zamanlı",
        summary: "Mobil oyun UA kreatifleri.",
        roles: [{ title: "Pazarlama Sanatçısı", period: "Mayıs 2026 – Eylül 2026" }],
      },
      voyager: {
        company: "Voyager",
        meta: "Tam zamanlı",
        summary: "Oyun ve oyun dışı uygulamaların büyütülmesi ve yayınlanması.",
        roles: [{ title: "Pazarlama Sanatçısı", period: "Ağustos 2024 – Nisan 2026" }],
      },
      sevenapps: {
        company: "7apps",
        meta: "Ocak 2023 – Mart 2024 · Tam zamanlı · Hibrit · İstanbul",
        summary: "",
        roles: [
          { title: "Jr. Pazarlama Uzmanı", period: "Eylül 2023 – Mart 2024" },
          { title: "Jr. Pazarlama Sanatçısı", period: "Ocak 2023 – Mart 2024" },
        ],
      },
      hungri: {
        company: "Hungri Games",
        meta: "Tam zamanlı · İstanbul",
        summary: "",
        roles: [{ title: "NFT Oyun Topluluk ve Sosyal Medya Yöneticisi", period: "Mart 2022 – Eylül 2022" }],
      },
      metahorse: {
        company: "Metahorse Unity",
        meta: "Tam zamanlı · İstanbul",
        summary: "",
        roles: [
          {
            title: "NFT Oyun Topluluk ve Sosyal Medya Yöneticisi ve Tasarımcı",
            period: "Mart 2022 – Eylül 2022",
          },
        ],
      },
      limoods: {
        company: "Limood's",
        meta: "Serbest · İstanbul",
        summary: "",
        roles: [{ title: "Topluluk ve Sosyal Medya Yöneticisi ve Tasarımcı", period: "Mayıs 2021 – Kasım 2021" }],
      },
      okan: {
        company: "İstanbul Okan Üniversitesi",
        meta: "Yarı zamanlı · İstanbul",
        summary: "",
        roles: [{ title: "Grafik Tasarım Stajyeri", period: "Temmuz 2020 – Ekim 2020" }],
      },
    },
  },
  tools: {
    heading: "Kullandığım uygulamalar",
    more: "ve daha fazlası",
  },
  hobbies: {
    heading: "Hobiler",
    items: {
      music: "Müzik",
      sports: "Spor",
      games: "Oyun oynamak",
      "vibe-coding": "Vibe coding",
    },
  },
  work: {
    eyebrow: "Seçili çalışmalar",
    heading: "Çalışmalarım",
    intro: "AI video, uygulama, mobil oyun, UGC ve 3D.",
    all: "Tümü",
    filterLabel: "İş filtresi",
    showing: "{count} iş",
    empty: "Bu kategoride henüz bir şey yok.",
    close: "Kapat",
    previous: "Önceki",
    next: "Sonraki",
    role: "Rol",
    result: "Sonuç",
    openPlayable: "Playable’ı aç",
    hint: "Ok tuşları çalışmalar arasında gezer. Esc kapatır.",
    categories: {
      ai: "AI Video Kreatifleri",
      app: "Uygulama Kreatifleri",
      game: "Mobil Oyun Kreatifleri",
      ugc: "UGC Kreatifleri",
      assets: "3D Asset’ler",
    },
    items: {
      ...numberedCopies(aiWorkIds, "AI video kreatifi."),
      ...numberedCopies(appWorkIds, "Uygulama kreatifi."),
      ...numberedCopies(gameWorkIds, "Mobil oyun kreatifi."),
      ...numberedCopies(ugcWorkIds, "UGC kreatifi."),
      "asset-switch": {
        title: "Toggle Switch",
        caption: "3D asset.",
        role: "Pazarlama Sanatçısı",
        result: "",
        alt: "3D anahtar",
      },
      "asset-cash": {
        title: "Cash Stack",
        caption: "3D asset.",
        role: "Pazarlama Sanatçısı",
        result: "",
        alt: "3D nakit destesi",
      },
      "asset-character": {
        title: "Character",
        caption: "3D asset.",
        role: "Pazarlama Sanatçısı",
        result: "",
        alt: "3D karakter",
      },
      "asset-safe": {
        title: "Safe",
        caption: "3D asset.",
        role: "Pazarlama Sanatçısı",
        result: "",
        alt: "3D kasa",
      },
      "asset-headphones": {
        title: "Headphones",
        caption: "3D asset.",
        role: "Pazarlama Sanatçısı",
        result: "",
        alt: "3D kulaklık",
      },
      "asset-watch": {
        title: "Watch",
        caption: "3D asset.",
        role: "Pazarlama Sanatçısı",
        result: "",
        alt: "3D saat",
      },
      "asset-phone": {
        title: "Phone",
        caption: "3D asset.",
        role: "Pazarlama Sanatçısı",
        result: "",
        alt: "3D telefon",
      },
      "asset-necklace": {
        title: "Necklace",
        caption: "3D asset.",
        role: "Pazarlama Sanatçısı",
        result: "",
        alt: "3D kolye",
      },
      "asset-cart": {
        title: "Shopping Cart",
        caption: "3D asset.",
        role: "Pazarlama Sanatçısı",
        result: "",
        alt: "3D alışveriş sepeti",
      },
    } as Record<WorkId, WorkCopy>,
  },
  footer: {
    heading: "Birlikte çalışalım",
    line: "Mobil oyun stüdyoları ve UA ekipleriyle yeni fırsatlara açığım.",
    note: "Pazarlama Sanatçısı · İstanbul",
  },
};

export default tr;
