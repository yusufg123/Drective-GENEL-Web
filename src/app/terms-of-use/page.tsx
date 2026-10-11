import type { Metadata } from 'next'
import LegalDocument, { type LegalSection } from '@/components/LegalDocument'
import { getLocale } from '@/lib/i18n-server'

const address = 'Halkalı Merkez Mah. Halkalı Cad No:281/23 Ofis No:34, 34303 Küçükçekmece/İstanbul'

const content = {
  tr: {
    metaTitle: 'Kullanım Şartları',
    metaDescription: 'Drective web sitesi kullanım şartları.',
    title: 'Kullanım Şartları',
    updated: 'Son Güncellenme Tarihi: 23 Eylül 2025',
    sections: [
      {
        title: '1. Giriş',
        blocks: [
          {
            type: 'p',
            text: 'Drective web sitesine ("Site") hoş geldiniz. Bu Kullanım Şartları ("Şartlar"), Site\'yi ziyaret etmeniz ve kullanmanız ile ilgili olarak sizinle Drective arasındaki hukuki ilişkiyi düzenler. Lütfen Site\'yi kullanmadan önce bu Şartları dikkatle okuyunuz.',
          },
        ],
      },
      {
        title: '2. Sorumluluk Reddi',
        blocks: [
          {
            type: 'p',
            text: 'Site\'de yer alan tüm içerikler "olduğu gibi" sunulmaktadır. Drective, içeriklerin doğruluğu, güncelliği veya eksiksizliği konusunda herhangi bir garanti vermemektedir. Sitenin kullanımından doğabilecek her türlü zarardan Drective sorumlu tutulamaz.',
          },
        ],
      },
      {
        title: '3. Fikri Mülkiyet Hakları',
        blocks: [
          {
            type: 'p',
            text: 'Site\'de yer alan tüm içerikler (metinler, görseller, logolar, tasarımlar, yazılımlar vb.) Drective veya lisans verenlerine aittir ve Türk Fikri ve Sınaî Haklar Kanunu ve ilgili mevzuat kapsamında korunmaktadır. İzinsiz kopyalama, çoğaltma, dağıtma veya başka bir şekilde kullanımı yasaktır.',
          },
        ],
      },
      {
        title: '4. Kullanıcı Yükümlülükleri',
        blocks: [
          { type: 'p', text: 'Site\'yi kullanırken aşağıdaki kurallara uymayı kabul edersiniz:' },
          {
            type: 'ul',
            items: [
              'Yasalara aykırı faaliyetlerde bulunmamak,',
              'Başkalarının haklarını ihlal etmemek,',
              'Zararlı yazılım yaymamak veya yüklememek,',
              'Site\'nin işleyişini engellemeye veya bozmaya çalışmamak,',
              'Üçüncü kişilerin kişisel verilerini izinsiz olarak paylaşmamak,',
              'Sahte veya yanıltıcı bilgi vermemek.',
            ],
          },
        ],
      },
      {
        title: '5. Üçüncü Taraf Bağlantıları',
        blocks: [
          {
            type: 'p',
            text: 'Site üzerinden erişilebilen üçüncü taraf web sitelerinin içerikleri, gizlilik politikaları veya uygulamaları üzerinde herhangi bir kontrolümüz bulunmamaktadır. Bu tür sitelerin kullanımından doğabilecek her türlü zarar veya kayıptan sorumlu değiliz.',
          },
        ],
      },
      {
        title: '6. Hizmetlerin Değiştirilmesi veya Sona Erdirilmesi',
        blocks: [
          {
            type: 'p',
            text: 'Drective, herhangi bir zamanda önceden bildirimde bulunmaksızın Site\'de değişiklik yapma, içerik ekleme veya çıkarma, hizmetleri değiştirme veya sonlandırma hakkını saklı tutar.',
          },
        ],
      },
      {
        title: '7. Sınırlı Sorumluluk',
        blocks: [
          {
            type: 'p',
            text: 'Drective, Site\'nin kesintisiz, güvenli veya hatasız olacağına dair herhangi bir garanti vermemektedir. Sitenin kullanımından doğan doğrudan veya dolaylı zararlardan sorumlu tutulamaz.',
          },
        ],
      },
      {
        title: '8. Tazminat',
        blocks: [
          {
            type: 'p',
            text: 'Bu Şartların ihlalinden veya Site\'nin kötüye kullanılmasından kaynaklanan her türlü talep, zarar, yükümlülük, gider ve masraflar (avukatlık ücretleri dahil) için Drective\'i tazmin etmeyi kabul edersiniz.',
          },
        ],
      },
      {
        title: '9. Uygulanacak Hukuk ve Yetkili Mahkeme',
        blocks: [
          {
            type: 'p',
            text: 'Bu Şartlar, Türk hukukuna tabidir. Taraflar arasında doğabilecek uyuşmazlıkların çözümünde İstanbul Anadolu Mahkemeleri ve İcra Daireleri yetkilidir.',
          },
        ],
      },
      {
        title: '10. Değişiklikler',
        blocks: [
          {
            type: 'p',
            text: 'Drective, dilediği zaman bu Şartlarda değişiklik yapma hakkını saklı tutar. Değişiklikler, Sitede yayınlandığı andan itibaren geçerli olacaktır. Değişikliklerden sonra Site\'yi kullanmaya devam etmeniz, değişiklikleri kabul ettiğiniz anlamına gelir.',
          },
        ],
      },
      {
        title: 'İletişim',
        blocks: [
          {
            type: 'fields',
            items: [
              ['Şirket Ünvanı', 'D-RECTIVE YAZILIM VE DANIŞMANLIK LİMİTED ŞİRKETİ'],
              ['Adres', address],
              ['E-posta', 'drectivegames@gmail.com'],
            ],
          },
        ],
      },
    ] satisfies LegalSection[],
  },
  en: {
    metaTitle: 'Terms of Use',
    metaDescription: 'Terms of use for the Drective website.',
    title: 'Terms of Use',
    updated: 'Last updated: September 23, 2025',
    sections: [
      {
        title: '1. Introduction',
        blocks: [
          {
            type: 'p',
            text: 'Welcome to the Drective website (the "Site"). These Terms of Use (the "Terms") govern the legal relationship between you and Drective regarding your visit to and use of the Site. Please read these Terms carefully before using the Site.',
          },
        ],
      },
      {
        title: '2. Disclaimer',
        blocks: [
          {
            type: 'p',
            text: 'All content on the Site is provided "as is". Drective makes no warranty as to the accuracy, timeliness or completeness of the content. Drective cannot be held liable for any damages arising from the use of the Site.',
          },
        ],
      },
      {
        title: '3. Intellectual Property',
        blocks: [
          {
            type: 'p',
            text: 'All content on the Site (text, images, logos, designs, software, etc.) belongs to Drective or its licensors and is protected under the Turkish Law on Intellectual and Artistic Works and related legislation. Unauthorized copying, reproduction, distribution or any other use is prohibited.',
          },
        ],
      },
      {
        title: '4. User Obligations',
        blocks: [
          { type: 'p', text: 'When using the Site, you agree to:' },
          {
            type: 'ul',
            items: [
              'Not engage in unlawful activities,',
              'Not infringe the rights of others,',
              'Not distribute or upload malicious software,',
              'Not attempt to obstruct or disrupt the operation of the Site,',
              'Not share third parties’ personal data without permission,',
              'Not provide false or misleading information.',
            ],
          },
        ],
      },
      {
        title: '5. Third-Party Links',
        blocks: [
          {
            type: 'p',
            text: 'We have no control over the content, privacy policies or practices of third-party websites accessible through the Site. We are not responsible for any damage or loss arising from the use of such sites.',
          },
        ],
      },
      {
        title: '6. Modification or Termination of Services',
        blocks: [
          {
            type: 'p',
            text: 'Drective reserves the right to modify the Site, add or remove content, and change or discontinue services at any time without prior notice.',
          },
        ],
      },
      {
        title: '7. Limitation of Liability',
        blocks: [
          {
            type: 'p',
            text: 'Drective does not guarantee that the Site will be uninterrupted, secure or error-free, and cannot be held liable for any direct or indirect damages arising from the use of the Site.',
          },
        ],
      },
      {
        title: '8. Indemnification',
        blocks: [
          {
            type: 'p',
            text: 'You agree to indemnify Drective against all claims, damages, liabilities, costs and expenses (including attorney fees) arising from a breach of these Terms or misuse of the Site.',
          },
        ],
      },
      {
        title: '9. Governing Law and Jurisdiction',
        blocks: [
          {
            type: 'p',
            text: 'These Terms are governed by Turkish law. The Istanbul Anatolian Courts and Enforcement Offices have jurisdiction over any disputes between the parties.',
          },
        ],
      },
      {
        title: '10. Changes',
        blocks: [
          {
            type: 'p',
            text: 'Drective may amend these Terms at any time. Changes take effect as soon as they are published on the Site. Continuing to use the Site after changes means you accept them.',
          },
        ],
      },
      {
        title: 'Contact',
        blocks: [
          {
            type: 'fields',
            items: [
              ['Company name', 'D-RECTIVE YAZILIM VE DANIŞMANLIK LİMİTED ŞİRKETİ'],
              ['Address', `${address}, Turkey`],
              ['Email', 'drectivegames@gmail.com'],
            ],
          },
        ],
      },
    ] satisfies LegalSection[],
  },
}

export function generateMetadata(): Metadata {
  const c = content[getLocale()]
  return { title: c.metaTitle, description: c.metaDescription }
}

export default function TermsOfUsePage() {
  const c = content[getLocale()]
  return <LegalDocument title={c.title} updated={c.updated} sections={c.sections} />
}
