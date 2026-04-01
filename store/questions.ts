import { Question } from "../types/quiz";

export const mockQuestions: Question[] = [
  {
    id: 1,
    questionText:
      "1-) Aşağıdakilerden hangisi veri indirgeme yöntemlerinden değildir?",
    options: [
      "A) Veri küpü birleştirme",
      "B) Boyut indirgeme",
      "C) Veri sıkıştırma",
      "D) Veri yönlendirme",
      "E) Büyük sayıların indirgenmesi",
    ],
    correctAnswer: "D) Veri yönlendirme",
  },
  {
    id: 2,
    questionText:
      "2-) I. Kümeleme, II. Karar Ağaçları, III. İstisna Analizi, IV. Birliktelik Analizi, V. Zaman Serisi Analizi. Yukarıda verilenlerden hangisi veya hangileri veri madenciliği yöntemleri içerisinden tanımlayıcı yöntemleri arasındadır?",
    options: [
      "A) I,II,IV",
      "B) II,III,IV",
      "C) I,III,IV",
      "D) I,III,IV,V",
      "E) Hepsi",
    ],
    correctAnswer: "C) I,III,IV",
  },
  {
    id: 3,
    questionText:
      "3-) Veri madenciliği işlevlerinden veriyi önceden belirlenmiş olan sınıflardan birine dahil eden aşama aşağıdakilerden hangisidir?",
    options: [
      "A) Eğri Uydurma",
      "B) Zaman serileri inceleme",
      "C) İstisna Analizi",
      "D) Sınıflandırma",
      "E) Kümeleme",
    ],
    correctAnswer: "D) Sınıflandırma",
  },
  {
    id: 4,
    questionText:
      "4-) Aşağıdakilerden hangisi istatistiksel veri türü değildir?",
    options: [
      "A) Nümerik Veriler",
      "B) Nominal Veriler",
      "C) Koordinat Veriler",
      "D) Ordinal Veriler",
      "E) Ratio Veriler",
    ],
    correctAnswer: "C) Koordinat Veriler",
  },
  {
    id: 5,
    questionText:
      "5-) İşletmelere ait veritabanlarının, belirli bir amaca göre konu odaklı olarak düzenlenmiş, veri madenciliğinde doğrudan kullanılabilir duruma getirilmiş hâli ………….. olarak tanımlanır. Bu tanıma göre noktalı yere aşağıdakilerden hangisi gelmelidir?",
    options: [
      "A) OLAP",
      "B) Veri Deposu",
      "C) Veri Merkezi",
      "D) Veri Madenciliği",
      "E) Veri Ambarı",
    ],
    correctAnswer: "E) Veri Ambarı",
  },
  {
    id: 6,
    questionText:
      "6-) Veritabanlarında doğru olmayacak kadar uç değerler, aykırı değer ya da sıra dışı değerler şekildeki aykırı değerler ya da farklı sebeplerle yanlış girilmiş değerler genel olarak ne olarak tanımlanır?",
    options: [
      "A) Kayıp Veri",
      "B) Denetimsiz Veri",
      "C) OLAP",
      "D) Gürültülü Veri",
      "E) Karmaşık Veri",
    ],
    correctAnswer: "D) Gürültülü Veri",
  },
  {
    id: 7,
    questionText:
      "7-) Aşağıdakilerden hangisi bilgi keşfinin aşamalarından biri değildir?",
    options: [
      "A) Veri bütünleştirme",
      "B) Veri madenciliği",
      "C) Veri savunması",
      "D) Bilgi sunumu",
      "E) Veri dönüşümü",
    ],
    correctAnswer: "C) Veri savunması",
  },
  {
    id: 8,
    questionText:
      "8-) Veri madenciliği yöntemlerinde olan öngörü yöntemleri sınıflandırma ve eğri uydurma işlevi olarak ikiye ayrılır. Aşağıdakilerden hangisi sınıflandırma yönteminin içinde bulunan yöntemlerden biri değildir?",
    options: [
      "A) Karar ağaçları",
      "B) Zaman serisi analizi",
      "C) Yapay sinir ağları",
      "D) Kümeleme",
      "E) Karar destek makineleri",
    ],
    correctAnswer: "D) Kümeleme",
  },
  {
    id: 9,
    questionText:
      "11-) Yüksek boyutlu bir veriyi işlemek daha fazla işlem yükü gerektirir. Bir verinin yüksek boyutlu bir uzaydan,düşük boyutlu bir uzaya,anlamını kaybetmeyecek bir şekilde dönüştürülmesini sağlayan veri hazırlama tekniğidir?",
    options: [
      "A) Veri Küpü Birleştirme",
      "B) Boyut İndirgeme",
      "C) Veri Birleştirme",
      "D) Veri Sıkıştırma",
      "E) Büyük Sayıların İndirgenmesi",
    ],
    correctAnswer: "B) Boyut İndirgeme",
  },
  {
    id: 10,
    questionText:
      "13-) ”Verilerdeki örüntülerin belirlenmesi için veri madenciliği yöntemlerinin uygulanması” bu açıklama hangi aşamanın açıklamasıdır?",
    options: [
      "A) Veri madenciliği",
      "B) Veri temizleme",
      "C) Veri bütünleştirme",
      "D) Örüntü değerlendirme",
      "E) Veri dönüşümü",
    ],
    correctAnswer: "A) Veri madenciliği",
  },
  {
    id: 11,
    questionText:
      "14-) Aşağıdakilerden hangisi amaca yönelik veri ambarı açıklamasıdır?",
    options: [
      "A) verinin incelenmesi ve modellenmesi için oluşturulur",
      "B) veri temizleme ve birleştirme teknikleri kullanılır",
      "C) değişik veri kaynakları arasındaki tutarlılık sağlanır",
      "D) canlı veri tabanlarında alınmış verinin fiziksel olarak başka bir ortamda saklanması",
      "E) canlı veri tabanlarındaki değişimin veri ambarlarını etkilememesi",
    ],
    correctAnswer: "A) verinin incelenmesi ve modellenmesi için oluşturulur",
  },
  {
    id: 12,
    questionText:
      "15-) Aşağıdakilerden hangisi veri ön işleme aşamalarından değildir?",
    options: [
      "A) Veri temizleme",
      "B) Veri birleştirme",
      "C) Veri dönüşümü",
      "D) Veri azaltımı",
      "E) Veri iletimi",
    ],
    correctAnswer: "E) Veri iletimi",
  },
  {
    id: 13,
    questionText:
      "17-) Veri ambarına aktarılan veriler bir daha değiştirilmeyecek, sadece erişimin ve yeni veri yüklenmesinin mümkün olacağı verilere ne denir?",
    options: [
      "A) Ham veri",
      "B) Hareketli olmayan veriler",
      "C) Farklı tipteki veri",
      "D) Eksik veri",
      "E) Dinamik veri",
    ],
    correctAnswer: "B) Hareketli olmayan veriler",
  },
  {
    id: 14,
    questionText:
      "18-) Veri hazırlama sürecinde aşağıdakilerden hangisi yoktur?",
    options: [
      "A) Veri Temizleme",
      "B) Veri Dönüştürme",
      "C) Veri Bölme",
      "D) Veri İndirgeme",
      "E) Veri Birleştirme",
    ],
    correctAnswer: "C) Veri Bölme",
  },
  {
    id: 15,
    questionText:
      "19-) Aşağıdakilerden hangileri regresyon ve sınıflandırma modellerinden en yaygın olarak kullanılan modellerden değildir?",
    options: [
      "A) karar ağaçları",
      "B) yapay sinir ağları",
      "C) genetik algoritmalar",
      "D) kümülatif algoritmalar",
      "E) zaman serisi analizi",
    ],
    correctAnswer: "D) kümülatif algoritmalar",
  },
  {
    id: 16,
    questionText:
      "21-) Aşağıdakilerden hangisi tanımlayıcı modellerden biri değildir?",
    options: [
      "A) Özetleme",
      "B) Birliktelik Kuralları",
      "C) Yapay Sinir Ağları",
      "D) İstisna Analizi",
      "E) Kümeleme",
    ],
    correctAnswer: "C) Yapay Sinir Ağları",
  },
  {
    id: 17,
    questionText:
      "22-) Verileri basit tanımları yapılmış alt gruplar içine yerleştirme işlemidir. Karakterizasyon olarak da adlandırılır. Yukarıda özellikleri verilen tanımlayıcı modelin adı nedir?",
    options: [
      "A) Özetleme",
      "B) Birliktelik Kuralları",
      "C) Karar Destek Makineleri",
      "D) Kümeleme",
      "E) Sıra Örüntü Analizi",
    ],
    correctAnswer: "A) Özetleme",
  },
  {
    id: 18,
    questionText:
      "23-) Aşağıdakilerden hangisi veri madenciliğine etki eden disiplinlerden biri değildir?",
    options: [
      "A) Makine Öğrenimi",
      "B) Bilişim Sistemleri",
      "C) İstatistik",
      "D) Görselleştirme",
      "E) Örüntü Tanıma",
    ],
    correctAnswer: "B) Bilişim Sistemleri",
  },
  {
    id: 19,
    questionText:
      "25-) Aşağıdakilerden hangisi veri kaynaklarından olan gelişmiş veri kümelerinin bir öğesi değildir?",
    options: [
      "A) Konumsal Veriler",
      "B) Çoğul Ortam Veri Tabanları",
      "C) Duraksız Veri",
      "D) Veri Ambarları",
      "E) Sosyal Ağ Verileri",
    ],
    correctAnswer: "D) Veri Ambarları",
  },
  {
    id: 20,
    questionText:
      "26-) Veri madenciliği işlevinde “veriyi gerçel değerli bir fonksiyona dönüştürme” işlevi aşağıdakilerden hangisidir?",
    options: [
      "A) Sınıflandırma",
      "B) Zaman Serileri İnceleme",
      "C) İstisna Analizi",
      "D) Özetleme",
      "E) Eğri Uyandırma",
    ],
    correctAnswer: "E) Eğri Uyandırma",
  },
  {
    id: 21,
    questionText:
      "27-) Veri madenciliğinde verilerin ilişkilendirilmiş, düzenlenmiş, anlamlandırılmış ve işlenmiş haline verilen ad nedir?",
    options: [
      "A) Veri",
      "B) Bilgi",
      "C) Enformasyon",
      "D) Sınıflandırma",
      "E) Bilgelik",
    ],
    correctAnswer: "C) Enformasyon",
  },
  {
    id: 22,
    questionText:
      "28-) Eğitim düzeyi, sosyoekonomik ölçek skorları gibi örnekler hangi istatiksel veri türüne aittir?",
    options: [
      "A) Ordinal Veriler",
      "B) Ratio Veriler",
      "C) Sürekli Nümerik Veriler",
      "D) Nümerik Veriler",
      "E) Nominal Veriler",
    ],
    correctAnswer: "A) Ordinal Veriler",
  },
  {
    id: 23,
    questionText: "29-) Bayes Teoremi ne demektir?",
    options: [
      "A) Alakalı verilerin saklandığı ortamdır.",
      "B) Bir veri grubunda bir özelliğin olasılığını tahmin etme yöntemidir.",
      "C) Verideki benzer kayıtların gruplandırılmasını sağlayan tekniktir.",
      "D) Birbirleriyle etkileşim içinde olan bireylerden oluşan bir topluluktur.",
      "E) Bir şeyin olmasının veya olmamasının matematiksel değeri veya olabilirlik yüzdesidir.",
    ],
    correctAnswer:
      "B) Bir veri grubunda bir özelliğin olasılığını tahmin etme yöntemidir.",
  },
  {
    id: 24,
    questionText:
      "30-) Veri tabanlarında bilgi keşfi adımlarından örneklem kümesi elde edildikten sonra, örneklem kümesinde yer alan hatalı tutanakların çıkarıldığı ve eksik nitelik değerlerinin değiştirildiği aşama aşağıdakilerden hangisinde doğru olarak verilmiştir?",
    options: [
      "A) Veri Seçimi",
      "B) Veri Madenciliği",
      "C) Yorumlama",
      "D) Veri Temizleme ve Ön İşleme",
      "E) Veri Hazırlama",
    ],
    correctAnswer: "D) Veri Temizleme ve Ön İşleme",
  },
  {
    id: 25,
    questionText:
      "31-) Aşağıdakilerden hangisi veri madenciliği yöntemlerinden olan denetimli yöntemlerden biri değildir?",
    options: [
      "A) En yakın k komşuluk",
      "B) Karar Ağaçları",
      "C) Sinir Ağları",
      "D) Birliktelik Kuralları",
      "E) Aşamalı Kümeleme",
    ],
    correctAnswer: "E) Aşamalı Kümeleme",
  },
  {
    id: 26,
    questionText: "32-) Yapay sinir ağlarının özelliklerinden biri değildir?",
    options: [
      "A) Öğrenme",
      "B) Genelleme",
      "C) Tanımlama",
      "D) Donanım ve Hız",
      "E) Hata Toleransı",
    ],
    correctAnswer: "C) Tanımlama",
  },
  {
    id: 27,
    questionText:
      "33-) Aşağıdakilerden hangisi veri madenciliğinin etkileşimde olduğu disiplinler arasından biri değildir?",
    options: [
      "A) İstatistik",
      "B) Makine Öğrenimi",
      "C) Görselleştirme",
      "D) Örüntü Tanıma",
      "E) İleri Beslenmeli Ağlar",
    ],
    correctAnswer: "E) İleri Beslenmeli Ağlar",
  },
  {
    id: 28,
    questionText:
      "34-) Aşağıdakilerden hangisi veri madenciliğinin uygulandığı alanlardan farklı bir alana ait bir uygulamadır?",
    options: [
      "A) Yeni ilaçların geliştirilmesi",
      "B) Piyasada var olan ilaçların etkilerinin belirlenmesi",
      "C) Kredi kartı dolandırıcılıklarının belirlenmesi",
      "D) Hastalara uygulana test sonuçlarının tahmin edilmesi",
      "E) Hastalıkların önceden teşhis ve tedavi edilmesi",
    ],
    correctAnswer: "C) Kredi kartı dolandırıcılıklarının belirlenmesi",
  },
  {
    id: 29,
    questionText:
      "35-) Aşağıda verilen ifadelerden hangisi eksik verinin tahmin edilmesi için kullanılan başlıca stratejilerden biri değildir?",
    options: [
      "A) Eksik verinin el ile doldurulması",
      "B) Eksik verinin tamamlanmasında genel bir değişkenin kullanılması",
      "C) Eksik verinin tamamlanmasında genel bir sabitin kullanılması",
      "D) Eksik verinin kendi sınıfında yer alan değerlerin ortalaması ile tanımlanması",
      "E) Eksik verinin tamamlanmasında en uygun değerin kullanılması",
    ],
    correctAnswer:
      "B) Eksik verinin tamamlanmasında genel bir değişkenin kullanılması",
  },
  {
    id: 30,
    questionText:
      "36-) Veri dönüştürmede düşük düzeydeki verinin kavram hiyerarşisi kullanılarak daha yüksek seviyeye dönüştürülmesine ne ad verilmektedir?",
    options: [
      "A) Genelleme",
      "B) Düzeltme",
      "C) Özellik oluşturma",
      "D) Bir araya getirme",
      "E) Normalleştirme",
    ],
    correctAnswer: "A) Genelleme",
  },
  {
    id: 31,
    questionText: "37-) Veri Ayrıştırma işlemi hangi aşamada gerçekleştirilir?",
    options: [
      "A) Veri Temizleme",
      "B) Veri Analizi",
      "C) Model Oluşturma",
      "D) Model Değerlendirme",
      "E) Veri Toplama",
    ],
    correctAnswer: "E) Veri Toplama",
  },
  {
    id: 32,
    questionText: "38-) Gürültülü veri nasıl düzeltilir?",
    options: [
      "A) Veri setindeki gürültülü örneklere filtreleme işlemi yapılır.",
      "B) Gürültülü veri analiz için önemlidir, bundan dolayı hiçbir düzeltme yapılmaz.",
      "C) Gürültülü veri düzeltme, veri setinin %100 doğru olması için gerekli değildir.",
      "D) Gürültülü verileri görmezden gelmek en iyi yaklaşımdır.",
      "E) Gürültülü veri, model eğitimi sırasında otomatik olarak düzeltilir",
    ],
    correctAnswer:
      "A) Veri setindeki gürültülü örneklere filtreleme işlemi yapılır.",
  },
  {
    id: 33,
    questionText:
      "39-) Eksik verilerin tamamlanması için hangi yöntem daha doğru sonuçlar verebilir?",
    options: [
      "A) Veri setinin ortalama değeriyle doldurma",
      "B) En sık tekrar eden değerle doldurma",
      "C) Benzer örneklerin ortalamasıyla doldurma",
      "D) Veri setinin mod değeriyle doldurma",
      "E) Veri setinin medyan değeriyle doldurma",
    ],
    correctAnswer: "C) Benzer örneklerin ortalamasıyla doldurma",
  },
  {
    id: 34,
    questionText:
      "40-) Aşağıdakilerden Hangisi veri madenciliği Sağlık Alanındaki Uygulamalarındandır?",
    options: [
      "A) Yeni ilaçların geliştirilmesi",
      "B) Piyasada var olan ilaçların etkilerinin belirlenmesi",
      "C) Hastalara uygulanan test sonuçlarının tahmin edilmesi",
      "D) Hastalıkların önceden teşhis ve tedavi edilmesi",
      "E) Hastalandıktan sonra sadece ilaç verilmesi",
    ],
    correctAnswer: "E) Hastalandıktan sonra sadece ilaç verilmesi",
  },
  {
    id: 35,
    questionText:
      "41-) Aşağıdakilerden hangisi Veri Madenciliğinde kullanılan Pazar Alanındaki Uygulamalardandır?",
    options: [
      "A) Müşterilerin Satın alma Örüntülerinin Belirlesnmesi",
      "B) Benzer Özellikler Gösteren Müşterilerin Bulunması",
      "C) Pazarlamanın 4 P si",
      "D) Müşterilerin Demografik Özellikleri Arasındaki Bağlantıların Belirlenmesi",
      "E) Müşteri İlişkileri Yönetimi",
    ],
    correctAnswer: "C) Pazarlamanın 4 P si",
  },
  {
    id: 36,
    questionText:
      "42-) I. İSTATİSTİK, II. GÖRSELLEŞTİRME, III. MAKİNE ÖĞRENİMİ, IV. EKONOMETRİ. Yukarıdakilerden hangisi veya hangileri veri madenciliğinin etkileşimde olduğu disiplinler arasındadır?",
    options: [
      "A) 1,3 ve 4",
      "B) HİÇBİRİ",
      "C) 1 ve 2",
      "D) 1,2 ve 3",
      "E) YALNIZ 4",
    ],
    correctAnswer: "D) 1,2 ve 3",
  },
  {
    id: 37,
    questionText:
      "43-) ”Verilerin kendi içerisinde yeniden düzenlenmesi işlemidir.” Yandaki tanıımda verilerin düzenlenmesinde söz konusu olan işlem başlığı aşağıdakilerden hangisidir?",
    options: [
      "A) VERİLERİN DÖNÜŞTÜRÜLMESİ",
      "B) VERİLERİN AZALTILMASI",
      "C) VERİLERİN NORMALİZASYONU",
      "D) VERİLERİN GÖRSELLEŞTİRİLMESİ",
      "E) MODELİN İZLENMESİ",
    ],
    correctAnswer: "A) VERİLERİN DÖNÜŞTÜRÜLMESİ",
  },
  {
    id: 38,
    questionText:
      "44-) Aşağıdakilerden hangisi yeni nesil veri madenciliği yöntemlerindendir?",
    options: [
      "A) Kümeleme",
      "B) Regresyon",
      "C) Karar Ağaçları",
      "D) K-En Yakın Komşu",
      "E) Kohonen Ağları",
    ],
    correctAnswer: "C) Karar Ağaçları",
  },
  {
    id: 39,
    questionText:
      "45-) Aşağıdakikilerden hangisi verilerin tahmininde kullanılan stratejilerdendir?",
    options: [
      "A) Verileri birleştirmek",
      "B) Verileri indirgemek",
      "C) Veri nesne veya özelliklerini elemek",
      "D) Gürültülü veriyi temizlemek",
      "E) Eksik verinin el ile doldurulması",
    ],
    correctAnswer: "E) Eksik verinin el ile doldurulması",
  },
  {
    id: 40,
    questionText:
      "46-) Veri madenciliğinde kayıp verilerin neden olacağı olumsuzlukları ortadan kaldırmak amacıyla kullanılan yaklaşımlaradan değildir?",
    options: [
      "A) Kayıp verilerin hepsi için aynı veriyi girmek",
      "B) Kayıp veri içeren kaydı veri kümesinden çıkartmak",
      "C) Kayıp verileri tek tek yazmak",
      "D) Kayıp verilere ait verileri silmek",
      "E) Kayıp veri yerine tüm verilerin ortalama değerinin girilmesi",
    ],
    correctAnswer: "D) Kayıp verilere ait verileri silmek",
  },
  {
    id: 41,
    questionText:
      "47-) Aşağıdakilerden hangisi yapay sinir ağlarının özelliklerinden değildir?",
    options: [
      "A) Hesaplama",
      "B) Öğrenme",
      "C) Genelleme",
      "D) Uyarlanabilme",
      "E) Doğrusal olmama",
    ],
    correctAnswer: "D) Uyarlanabilme",
  },
  {
    id: 42,
    questionText:
      "48-) İşletmelerin stratejik kararlarında destek olacak yararlı bilgiler sunan analitik işleme sistemi aşağıdakilerden hangisidir?",
    options: [
      "A) Veri Deposu (Data Mart)",
      "B) Çevrimiçi Analitik İşleme (OLAP)",
      "C) Meta Veri",
      "D) Veri Ambarı",
      "E) Bilgi İşlem",
    ],
    correctAnswer: "B) Çevrimiçi Analitik İşleme (OLAP)",
  },
  {
    id: 43,
    questionText:
      "49-) Veri hazırlama süreçlerinden hangisi verideki tutarsızlıkların giderilmesi ve verideki gürültünün temizlenmesi için uygulanır?",
    options: [
      "A) Veri Dönüştürme",
      "B) Veri Birleştirme",
      "C) Veri Temizleme",
      "D) Veri İndirgeme",
      "E) Veri Denetimi",
    ],
    correctAnswer: "C) Veri Temizleme",
  },
  {
    id: 44,
    questionText:
      "50-) Aşağıdakilerden hangisi veri madenciliğinin uygulandığı alanlardan değildir?",
    options: [
      "A) Pazarlama alanındaki uygulamalar",
      "B) Finans alanındaki uygulamalar",
      "C) Sağlık alanındaki uygulamalar",
      "D) Eğitim alanındaki uygulamalar",
      "E) Zirai alanındaki uygulamalar",
    ],
    correctAnswer: "E) Zirai alanındaki uygulamalar",
  },
  {
    id: 45,
    questionText:
      "51-) Aşağıdakilerden hangisi veri madenciliği metotlarından biridir?",
    options: [
      "A) Tanımlayıcı modeller",
      "B) Eksiltili veri modelleri",
      "C) Temizleyici veri modelleri",
      "D) İstatistiki veri modelleri",
      "E) Karar destek modelleri",
    ],
    correctAnswer: "A) Tanımlayıcı modeller",
  },
  {
    id: 46,
    questionText:
      "52-) Aşağıdakilerden hangisi Apriori Algoritmasının tanımında geçer?",
    options: [
      "A) Problemde istenilen sonucu elde etmek için kullanılan örneklem kümesindeki gereksiz nitelikler.",
      "B) Bir programın anlaşılması veya program geliştirmede yardımcı olmaya yönelik gösterim teknikleridir.",
      "C) Normal olmayan ya da sıra dışı veri elemanlarını bulmak için, çıkarılmış desenleri uygulama işlemidir.",
      "D) Sık geçen örüntülerin yakalanmasında kullanılır.",
      "E) Kitle üyelerinin her birinin belirli bir kesitinin özeliklerinden her biridir.",
    ],
    correctAnswer: "D) Sık geçen örüntülerin yakalanmasında kullanılır.",
  },
  {
    id: 47,
    questionText:
      "53-) Hangisi karar ağaçları (decision trees) için doğru bir ifade değildir?",
    options: [
      "A) Karar ağaçları, sayısal ve kategorik verilerle çalışabilir ve her ikisini de işleyebilir.",
      "B) Hem sınıflandırma hem de regresyon problemleri için kullanılabilir.",
      "C) Veri Kümesindeki elemanları birleştirerek regresyon öğrenmesine katkı sağlar.",
      "D) Karar ağaçları, sınıflandırma aşamasında veri kümesini bölerek ve öznitelikleri değerlendirerek kararlar alır.",
      "E) Karar ağaçları, veri setinin boyutuna bağlı olarak modelin ağaç yapısını değiştirmez ve bu nedenle eğitim süresini etkilemez.",
    ],
    correctAnswer:
      "C) Veri Kümesindeki elemanları birleştirerek regresyon öğrenmesine katkı sağlar.",
  },
  {
    id: 48,
    questionText:
      "54-) Aşağıdakilerden hangisi Veri Hazırlama (Data Preparation) aşamalarından değildir?",
    options: [
      "A) Veriyi Temizlemek",
      "B) Veriyi Bölmek",
      "C) Veriyi Kurmak",
      "D) Veri Formatlamak",
      "E) Veriyi Birleştirmek",
    ],
    correctAnswer: "B) Veriyi Bölmek",
  },
  {
    id: 49,
    questionText:
      "55-) Harf, rakam ya da çeşitli sembol ve işaretler ile temsil edilen ham gözlemler, işlenmemiş gerçekler ya da izlenimler ifadesi seçeneklerdeki kavramlardan hangisinin tanımıdır?",
    options: [
      "A) Veri Madenciliği",
      "B) Veri Tabanı",
      "C) Makina Öğrenimi",
      "D) Veri Yönetimi",
      "E) Veri",
    ],
    correctAnswer: "E) Veri",
  },
  {
    id: 50,
    questionText:
      "56-) Veri ambarlarında aykırı veriyi bulma ve düzeltme için, verilerdeki gürültünün temizlenmesi yaklaşımlarından hangisi kullanılır?",
    options: [
      "A) Bölümleme yöntemi yaklaşımı",
      "B) Sınır değerleri yaklaşımı",
      "C) Kümeleme yöntemi yaklaşımı",
      "D) Regresyon yöntemi yaklaşımı",
      "E) Ayıklama yöntemi yaklaşımı",
    ],
    correctAnswer: "C) Kümeleme yöntemi yaklaşımı",
  },
  {
    id: 51,
    questionText:
      "57-) Aşağıdakilerden hangisi veri madenciliğindeki sorunlardan değildir?",
    options: [
      "A) Aynı tipte sorunlar üzerinde çalışabilme",
      "B) Değişen veya eklenen verileri kolayca kullanabilme",
      "C) Gizlilik ve sosyal haklar",
      "D) Kullanıcı arabirimi",
      "E) Kullanabilirlik ve ölçeklenebilirlik",
    ],
    correctAnswer: "A) Aynı tipte sorunlar üzerinde çalışabilme",
  },
  {
    id: 52,
    questionText:
      "58-) Aşağıdakilerden hangisinde “Data Mart’ı” ifade eden bir tanımdır?",
    options: [
      "A) Veri kaynaklarının birleştirilmesiyle başlar.",
      "B) Birbiriyle ilişkili bilgilerin deponlandığı alandır.",
      "C) İlişkili verilerin sorgulandığı ve analizlerin yapılabildiği bir depodur.",
      "D) Veri ambarlarının alt kümeleridir.",
      "E) Farklı veritabanları arasında bir arabulucu katmandır.",
    ],
    correctAnswer: "D) Veri ambarlarının alt kümeleridir.",
  },
  {
    id: 53,
    questionText:
      "59-) Aşağıdakilerden hangisi veri madenciliğindeki sorunlar arasında yer almaz?",
    options: [
      "A) Farklı tipte veriler üzerinde çalışabilme.",
      "B) Uygulama ortamı bilgisi kullanamama.",
      "C) Değişen veya eklenen verileri kolayca bulabilme.",
      "D) Örüntü değerlendirme",
      "E) Başarım ve ölçeklenebilirlik",
    ],
    correctAnswer: "B) Uygulama ortamı bilgisi kullanamama.",
  },
  {
    id: 54,
    questionText: "60-) Veri bütünleştirme hangi amaçla yapılır?",
    options: [
      "A) Bir çok data kaynağını birleştirebilmek.",
      "B) Yapılacak olan analiz ile ilgili olan verileri belirlemek.",
      "C) Elde edilen bilgilerin kullanıcılara sunumu",
      "D) Bazı ölçütlere göre elde edilmiş ilginç örüntüleri bulmak ve değerlendirmek",
      "E) Değişen veya eklenen verileri kolayca kullanabilmek.",
    ],
    correctAnswer: "A) Bir çok data kaynağını birleştirebilmek.",
  },
  {
    id: 55,
    questionText:
      "61-) Aşağıdakilerden hangisi veri madenciliğinciliginin temel kavramlarindan degildir?",
    options: [
      "A) Teknoloji",
      "B) Enformasyon",
      "C) Veri",
      "D) Bilgelik",
      "E) Bilgi",
    ],
    correctAnswer: "A) Teknoloji",
  },
  {
    id: 56,
    questionText:
      "62-) Aşağıdakilerden hangisi öngörü yöntemlerinden sınıflandırma türlerine ornek verilemez.",
    options: [
      "A) Karar ağaçları",
      "B) Bayes siniflandirma",
      "C) En uzak komşu",
      "D) Yapay sinir aglari",
      "E) En yakin komşu",
    ],
    correctAnswer: "C) En uzak komşu",
  },
  {
    id: 57,
    questionText:
      "63-) Asagidakilerden hangisi veri madenciliğin uygulama alanlarından degildir.",
    options: [
      "A) Bilim",
      "B) is hayati",
      "C) Devlet",
      "D) Web",
      "E) Sosyal hayat",
    ],
    correctAnswer: "E) Sosyal hayat",
  },
  {
    id: 58,
    questionText:
      "64-) Aşağıdakilerden hangisi veri madenciliğinin etkileşimde olduğu disiplinlerden biri olan makine öğreniminin tanımıdır?",
    options: [
      "A) Verilerin, tablolar ve grafikler gibi görseller yardımıyla sunulmasını sağlayan teknolojileri ifade eder.",
      "B) Verileri analiz eder ve değerlendirir.",
      "C) Bilgisayarların bazı işlemlerden çıkarsamalar yaparak yeni işlemler üretmesidir.",
      "D) Birbiriyle ilişkili olan ve amaca uygun biçimde düzenlenmiş, mantıksal ve fiziksel olarak tanımlanmış veriler bütünüdür.",
      "E) Düzenli ve sistematik biçimde tekrar eden ilişkileri bir model olarak kabul eden ve bu modelin benzerlerini ya da en benzerini veri tabanı içinden arama ve bulmaya yönelik teknolojidir.",
    ],
    correctAnswer:
      "C) Bilgisayarların bazı işlemlerden çıkarsamalar yaparak yeni işlemler üretmesidir.",
  },
  {
    id: 59,
    questionText:
      "65-) Sistem performanslarına etki eden faktörlerin ve kuralların belirlenmesi örneği veri madenciliğinin hangi uygulama alanıdır?",
    options: [
      "A) Eğitim alanı",
      "B) Sağlık alanı",
      "C) Pazarlama alanı",
      "D) Endüstri ve mühendislik alanı",
      "E) Finans alanı",
    ],
    correctAnswer: "D) Endüstri ve mühendislik alanı",
  },
  {
    id: 60,
    questionText:
      "66-) Sıfır başlangıç noktası tüm ölçüm araçlarında aynı anlamı taşıdığı ortaya çıkan değişken tipi hangisidir?",
    options: [
      "A) İsimsel değişken",
      "B) Oranlı ölçülendirilmiş değişken",
      "C) İkili değişken",
      "D) Sıra gösteren değişken",
      "E) Tam sayılı değişken",
    ],
    correctAnswer: "B) Oranlı ölçülendirilmiş değişken",
  },
];
