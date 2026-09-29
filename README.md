# Portfolio

Kişisel site. Arayüz İngilizce. Türkçe metinler `src/locales/tr.ts` içine eklenince açılır.

## Çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000).

## Neyi nerede değiştirirsin

| Ne | Dosya |
|---|---|
| İsim, e-posta, LinkedIn, CV yolu, fotoğraf yolu | `src/content/site.ts` → `profile` |
| Rakamlar (`X+`) | `src/content/site.ts` → `stats` |
| Deneyim sırası | `src/content/site.ts` → `experience` |
| Araç listesi | `src/content/site.ts` → `tools` |
| İşler, poster, video, playable linki | `src/content/site.ts` → `workItems` |
| Ekrandaki cümleler | `src/locales/en.ts` |
| Türkçe | `src/locales/tr.ts` |

İngilizce cümle ile veri ayrı. Yeni bir iş ekleyince hem `workItems` içine kayıt, hem `en.ts` içinde `work.items` altına aynı `id` ile metin gerekir. TypeScript eksik metni derlemede söyler.

## Fotoğraf

`public/portrait.jpg` koy. Sonra `profile.portrait` değerini `"/portrait.jpg"` yap. Boş bırakırsan monogram durur.

## İş ekleme

1. Görseli `public/work/` içine koy. Poster için SVG, JPG veya WebP olur.
2. Video varsa mp4’ü de `public/work/` içine koy. Sadece poster varsa video alanı yazma. Masaüstünde video, kartın üstüne gelince oynar. Telefonda kart ekrandayken sessiz döner. Dosya, oynatma anına kadar inmez.
3. Playable bir link ise `playable: "https://..."` ekle. Lightbox’ta “Open playable” çıkar.
4. `size`: `story` (dikey), `wide` (geniş), `square`.
5. `featured: true` ilk ekrandaki üç önizlemeye girer. En fazla üç tane kullan.

Örnek:

```ts
{
  id: "new-piece",
  category: "video",
  size: "story",
  format: "9:16",
  poster: "/work/new-piece.jpg",
  video: "/work/new-piece.mp4",
}
```

Kategoriler: `video`, `playable`, `static`, `store`, `motion`. İsimlerini `en.ts` içinde `work.categories` altından değiştirirsin.

## Araç ikonu

1. `src/content/site.ts` içindeki `tools` listesine `{ id: "yeni", name: "Program Adı" }` ekle.
2. `src/components/tool-icons.tsx` içine küçük bir SVG fonksiyonu yaz ve `icons` haritasına bağla.
3. Rengini `src/app/globals.css` içinde `.tool[data-tool="yeni"]` ile ver.

## CV

Kendi PDF’ini `public/cv.pdf` olarak koy. Buton bu dosyayı indirir. Şu an yerinde kısa bir yer tutucu var.

## Türkçe

Sağ üstteki EN / TR seçimi tarayıcıda saklanır ve `html lang` değerini değiştirir. `src/locales/tr.ts` boşken metinler İngilizce kalır. Çevirmek için `en.ts` içinden istediğin bloğu `tr.ts` içine kopyalayıp değiştir. Eksik kalanlar İngilizceye düşer.

## Renkler

`src/app/globals.css` dosyasının başındaki `--bg`, `--surface`, `--accent` değerleri tüm sitenin rengidir.

## Vercel

Repoyu Vercel’e bağla. Framework olarak Next.js’i seçer. İsteğe bağlı ortam değişkeni: `NEXT_PUBLIC_SITE_URL` (paylaşım linklerinin doğru domaine bakması için). Yoksa Vercel kendi adresini kullanır.
