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
  {
    id: 61,
    questionText:
      "67-) Aşağıdakilerden hangisi temel değişken tiplerinden değildir?",
    options: [
      "A) Tam sayılı (Integer) Değişkenler",
      "B) Oranlı Ölçümlendirilmiş (Ratio-Scaled) Değişkenler",
      "C) Aralıklı Ölçümlendirilmiş (Interval-Scaled) Değişkenler",
      "D) İkili (Binary) Değişkenler",
      "E) Sıralı Deşikenler",
    ],
    correctAnswer: "E) Sıralı Deşikenler",
  },
  {
    id: 62,
    questionText:
      "68-) İşletmelerde iç veri kaynakları ile dış veri kaynaklarının birleştirilmesi ve düzenlenmesi ile oluşturulmuş, üzerinde veri madenciliği işlemlerinin gerçekleştirileceği veriyi sağlayan daha geniş ve özel veritabanlarına verilen isim nedir?",
    options: [
      "A) Veri Ambarı",
      "B) İç Veri",
      "C) Üst Veri",
      "D) Veri Deposu",
      "E) İç Veri Kaynakları",
    ],
    correctAnswer: "A) Veri Ambarı",
  },
  {
    id: 63,
    questionText:
      "69-) Aşağıdakilerden hangisi veri madenciliği tekniği ile analiz edilmek istenilen verilerdeki beklenen değerlerden sapan aykırı değerler veya hatalardır?",
    options: [
      "A) Eksik Veri",
      "B) Tutarsız Veri",
      "C) Gürültülü Veri",
      "D) Hatalı Veri",
      "E) Yanlış Veri",
    ],
    correctAnswer: "C) Gürültülü Veri",
  },
  {
    id: 64,
    questionText:
      "70-) Aşağıdakilerden hangisi Veri tabanlarında Bilgi Keşif sürecinde izlenmesi gereken temel aşamalardan değildir?",
    options: [
      "A) Amacın Tanımlanması",
      "B) Veriler Üzerinde Ön İşlemlerin Yapılması",
      "C) Modelin Kullanılması ve Yorumlanması",
      "D) Modelin İzlenmesi",
      "E) Modelin Taranması",
    ],
    correctAnswer: "E) Modelin Taranması",
  },
  {
    id: 65,
    questionText:
      "71-) Bazı veri madenciliği algoritmaları sadece ayrık veriler ile çalışır. Sürekli bir nitelik değerini bölerek her aralığı etiketler, kavram oluşturmak için kullanılır. Tanımı verilen ifade aşağıdakilerden hangisidir?",
    options: [
      "A) Veri Ayrıştırma",
      "B) Data Mart",
      "C) Değer Kümeleri",
      "D) Gürültülü Veri",
      "E) Bölmeleme",
    ],
    correctAnswer: "A) Veri Ayrıştırma",
  },
  {
    id: 66,
    questionText:
      "72-) Veri bir fonksiyona uydurulur. Bir değişkenin değeri diğer bir değişken kullanılarak bulunabilir. Tanımı verilen ifade aşağıdakilerden hangisidir?",
    options: [
      "A) Veri Birleştirme",
      "B) Gereksiz Veri",
      "C) Veri Dönüşümü",
      "D) Normalizasyon",
      "E) Eğri Uydurma",
    ],
    correctAnswer: "E) Eğri Uydurma",
  },
  {
    id: 67,
    questionText:
      "73-) I. Amacın tanımlanması, II. Modelin izlenmesi, III. Modelin kullanılması ve yorumlanması, IV. Veriler üzerinde ön işlemlerin yapılması, V. Modelin kurulması ve değerlendirilmesi. Veritabanlarında bilgi keşfi sürecinin adımları hangi şıkta doğru sıralanmıştır?",
    options: [
      "A) I-III-V-II-IV",
      "B) I-IV-V-III-II",
      "C) V-I-III-IV-II",
      "D) I-IV-III-II-V",
      "E) V-IV-I-II-III",
    ],
    correctAnswer: "B) I-IV-V-III-II",
  },
  {
    id: 68,
    questionText:
      "74-) Veri madenciliğinde kullanılan kümeleme algoritması olan K-means, hangi temel prensibe dayanır?",
    options: [
      "A) Hiyerarşik kümeleme",
      "B) Yoğunluk temelli kümeleme",
      "C) Merkez tabanlı kümeleme",
      "D) Doğrusal regresyon",
    ],
    correctAnswer: "C) Merkez tabanlı kümeleme",
  },
  {
    id: 69,
    questionText:
      "75-) Karar ağaçları hakkında aşağıdaki ifadelerden hangisi doğrudur?",
    options: [
      "A) Karar ağaçları sadece sınıflandırma problemleri için kullanılır.",
      "B) Karar ağaçları, regresyon problemleri için uygun değildir.",
      "C) Karar ağaçları, veri setindeki özellikleri ve hedef değişkeni kullanarak bir dizi karar kuralı oluşturur.",
      "D) Karar ağaçları, yalnızca küçük boyutlu veri setleri üzerinde etkili çalışır.",
    ],
    correctAnswer:
      "C) Karar ağaçları, veri setindeki özellikleri ve hedef değişkeni kullanarak bir dizi karar kuralı oluşturur.",
  },
  {
    id: 70,
    questionText:
      "76-) Tanımlayıcı modeller, veri madenciliğinde hangi amaçla kullanılır?",
    options: [
      "A) Gelecekteki olayları tahmin etmek için",
      "B) Veriler arasındaki ilişkileri tanımlamak ve özellikleri incelemek için",
      "C) Müşteri memnuniyetini artırmak için",
      "D) Rekabet avantajı sağlamak için",
      "E) Pazar payını artırmak için",
    ],
    correctAnswer:
      "B) Veriler arasındaki ilişkileri tanımlamak ve özellikleri incelemek için",
  },
  {
    id: 71,
    questionText:
      "77-) Aşağıdakilerden hangisi Veri Tabanlarında Bilgi Keşfi sürecinin ilk iki aşamasıdır?",
    options: [
      "A) Veriler Üzerinde Ön İşlemlerin Yapılması - Modelin İzlenmesi",
      "B) Amacın Tanımlanması - Veriler Üzerinde Ön İşlemlerin Yapılması",
      "C) Modelin İzlenmesi - Modelin Kullanılması ve Yorumlanması",
      "D) Modelin Kullanılması ve Yorumlanması - Modelin Kurulması ve Değerlendirilmesi",
      "E) Amacın Tanımlanması - Modelin İzlenmesi",
    ],
    correctAnswer:
      "B) Amacın Tanımlanması - Veriler Üzerinde Ön İşlemlerin Yapılması",
  },
  {
    id: 72,
    questionText:
      "78-) İşletmeler günlük faaliyetlerine ilişkin basit sorgulamaları ve analizleri işlemsel veri tabanları üzerinde kolaylıkla gerçekleştirebilirler. Buna karşın, çok yönlü veri analizi ve sorgulama yapmak istediklerinde normal veri analizi ve sorgulamadan farklı bir sistem kullanırlar. Çevrimiçi Analitik İşleme olarak adlandırılan bu sistem aşağıdakilerden hangisidir?",
    options: [
      "A) OLAP",
      "B) Veri Deposu",
      "C) Veri Ambarı",
      "D) NoSQL Veritabanı",
      "E) Veri Madenciliği",
    ],
    correctAnswer: "A) OLAP",
  },
  {
    id: 73,
    questionText:
      "79-) Veri Madenciliği’nin etkileşimde olduğu disiplinler hangisi veya hangileridir? I) Makine Öğrenimi II) Örüntü Tanıma III) İstatistik IV) Görselleştirme V) Veritabanı Sistemleri",
    options: [
      "A) I,II,III",
      "B) III,V,IV",
      "C) V,IV",
      "D) V,III",
      "E) I,II,III,IV,V",
    ],
    correctAnswer: "E) I,II,III,IV,V",
  },
  {
    id: 74,
    questionText:
      "80-) Aşağıda verilen maddellerden hangisi veriler üzerinde yapılan ön işlemlerdendir? I. Verilerin toplanması ve birleştirilmesi II. Verilen temizlenmesi III. Verilerin hangi kaynaklardan alındığı tespit edilmesi IV. Verilerin yeniden yapılandırılması",
    options: [
      "A) Hiçbiri",
      "B) I. II. ve III.",
      "C) I. II. ve IV.",
      "D) II. III. ve IV.",
      "E) Hepsi",
    ],
    correctAnswer: "C) I. II. ve IV.",
  },
  {
    id: 75,
    questionText:
      "81-) Temel değişken veri tiplerinden hangisi 0 ve1, doğru ve yanlış, pozitif ve negatif şekilde olan veri tipi hangisidir?",
    options: [
      "A) İkili veri",
      "B) Sıra gösteren değişken",
      "C) Tam sayılı değişken",
      "D) Aralıklı değişken",
      "E) Oranlı değişken",
    ],
    correctAnswer: "A) İkili veri",
  },
  {
    id: 76,
    questionText: "82-) Aşağıdaki tanımlardan hangisi yanlıştır?",
    options: [
      "A) OLAP “Ne” sorusunun cevabıdır.",
      "B) Canlı veritabanlı en çok 1 yıl geçmiş veri bulundurur.",
      "C) Enformasyon verilerin işlenmiş ve anlamlandırılmış halidir.",
      "D) Data Mart veri ambarının alt kümesidir.",
      "E) Veri ambarı ilişkili verilerin depolandığı yerdir.",
    ],
    correctAnswer: "E) Veri ambarı ilişkili verilerin depolandığı yerdir.",
  },
  {
    id: 77,
    questionText:
      "83-) “Bazı veritabanı algoritmaları sadece ………..... ile çalışır.” Yukarıda verilen boşluk için aşağıdakilerden hangisi gelirse uygun bir tanım olur?",
    options: [
      "A) Veri madenciliği.",
      "B) Veri azaltma.",
      "C) Histogram ile veri küçültme.",
      "D) Ayrık veriler.",
      "E) Veri dönüşmü.",
    ],
    correctAnswer: "D) Ayrık veriler.",
  },
  {
    id: 78,
    questionText:
      "84-) Bootstrapping ile ilgili aşağıdakilerden hangisi doğrudur?",
    options: [
      "A) Göresel veriler üzerinde yapılan iyileştirme işlemidir.",
      "B) Bir bağımsız değişkenin tahmin etme işlemidir.",
      "C) Veri Madenciliği uygulaması geliştirme programıdır.",
      "D) Sonuçları bilinen verilerden hareket edilerek bir model geliştirilmesidir ve bu modelden yararlanarak veri kümeleri için sonuç değerlerin tahmin edilmesidir.",
      "E) Küçük veri kümelerinin modelinde hata düzeyi tahmininde kullanılan tekniktir.",
    ],
    correctAnswer:
      "E) Küçük veri kümelerinin modelinde hata düzeyi tahmininde kullanılan tekniktir.",
  },
  {
    id: 79,
    questionText:
      "85-) Aşağıdakilerden hangisi veri madenciliği yöntemlerinden olan öngörü yöntemlerinden biri değildir?",
    options: [
      "A) Karar Ağaçları",
      "B) Yapay Sinir Ağları",
      "C) Sıralı Dizi Analizi",
      "D) En Yakın Komşu",
      "E) Bayes Sınıflandırma",
    ],
    correctAnswer: "C) Sıralı Dizi Analizi",
  },
  {
    id: 80,
    questionText:
      "86-) Aşağıdakilerden hangisi veri ayrıştırma özelliklerinden biri değildir?",
    options: [
      "A) Verinin değeri, bulunduğu etiketi ile değişir",
      "B) Veri boyutu küçülür",
      "C) Kavram oluşturmak için kullanılır",
      "D) Veri değeri bulunduğu aralığın etiketi ile değişir",
      "E) Veri boyutunu azaltır",
    ],
    correctAnswer: "E) Veri boyutunu azaltır",
  },
  {
    id: 81,
    questionText: "87-) Aşağıdakilerden hangisi VTBK sorgularından biridir?",
    options: [
      "A) Kümeleme",
      "B) Veri Hazırlama",
      "C) Modelleme",
      "D) Yayma",
      "E) Veri Hazırlama",
    ],
    correctAnswer: "A) Kümeleme",
  },
  {
    id: 82,
    questionText:
      "88-) Bir kümenin tanımlanması için başlangıçta evrenin elemanları hakkında bazı bilgilere gereksinim olduğu varsayımına dayanan yaklaşım aşağıdakilerden hangisidir?",
    options: [
      "A) Metadata",
      "B) Naive Bayes",
      "C) Hipotez",
      "D) Parametre",
      "E) Kaba Küme",
    ],
    correctAnswer: "E) Kaba Küme",
  },
  {
    id: 83,
    questionText:
      "89-) 1. Naive Bayes, 2. Karar Ağaçları, 3. Korelasyon Analizi, 4. Regresyon Analizi, 5. Kaba Kümeler. Yukarıda sayılarla belirtilen algoritmalardan hangisi sınıflama algoritmasına ait değildir?",
    options: [
      "A) Naive Bayes",
      "B) Karar Ağaçları",
      "C) Korelasyon Analizi",
      "D) Regresyon Analizi",
      "E) Kaba Kümeler",
    ],
    correctAnswer: "C) Korelasyon Analizi",
  },
  {
    id: 84,
    questionText:
      "90-) Aşağıdakilerden hangisi veri tabanını yormamak için oluşturulmuş bir programdır?",
    options: [
      "A) Veri tabanı",
      "B) Data Mart",
      "C) Veri",
      "D) Veri Ambarı",
      "E) Veri Madenciliği",
    ],
    correctAnswer: "D) Veri Ambarı",
  },
  {
    id: 85,
    questionText:
      "91-) Aşağıdakilerden hangisi verinin gürültülü olma nedenlerinden birisi değildir?",
    options: [
      "A) İnsan, yazılım ya da donanım problemleri",
      "B) Veri toplandığı sırada bir nitelik değerinin elde edilememesi, bilinmemesi",
      "C) Boyutu büyük olan veri setlerinin bulunması",
      "D) Veri iletimi sırasında yaşanan problemler",
      "E) Verinin farklı veri kaynaklarında tutulması",
    ],
    correctAnswer: "C) Boyutu büyük olan veri setlerinin bulunması",
  },
  {
    id: 86,
    questionText:
      "92-) Uzun araştırmalar ve uzun çalışmalar sonucunda bir bilgi keşfi yaptığımızı varsayalım. Bulduğumuz bu bilginin aşağıdaki özelliklerden hangisine sahip olması gerekmez?",
    options: [
      "A) Anlaşılabilir bir bilgi olmalıdır.",
      "B) Önemli bir bilgi olmalıdır.",
      "C) Gizli bir bilgi olmalıdır.",
      "D) Yararlı bir bilgi olmalıdır.",
      "E) Önceden bilinmeyen bir bilgi olmalıdır.",
    ],
    correctAnswer: "A) Anlaşılabilir bir bilgi olmalıdır.",
  },
  {
    id: 87,
    questionText:
      "93-) Aşağıdakilerden hangisi Veri Madenciliği çalışmalarından birisi değildir?",
    options: [
      "A) Kümeleme",
      "B) Veri Bulma",
      "C) İlişki Kurma",
      "D) Veri Özetleme",
      "E) Regresyon",
    ],
    correctAnswer: "B) Veri Bulma",
  },
  {
    id: 88,
    questionText: "94-) Veri pazarlarının iş yükünü azaltmadaki görevi nedir?",
    options: [
      "A) Veriyi kopyalayıp karar verme işlemi için saklar.",
      "B) Veri ambarının tamamına bakış sağlar.",
      "C) Veri tabanın küçük bir kopyasıdır.",
      "D) Farklı iş birimlerine uygun veri sunar.",
      "E) ilişkili verilerin sorgulanıp analizlerinin yapıldığı depo.",
    ],
    correctAnswer: "D) Farklı iş birimlerine uygun veri sunar.",
  },
  {
    id: 89,
    questionText:
      "95-) Veri seçme sürecinde hangi faktörler göz önünde bulundurulmalıdır?",
    options: [
      "A) Verinin hedeflerle ilişkisi",
      "B) Verinin teknik limitleri",
      "C) Verinin kalitesi",
      "D) Dengeli veri kullanımı",
      "E) Hepsine",
    ],
    correctAnswer: "E) Hepsine",
  },
  {
    id: 90,
    questionText:
      "96-) Bir anket yapılmış ve katılımcılara “sosyal medya kullanıyor musunuz?” sorusu sorulmuştur ve “evet/hayır” cevabı alınmıştır. Bu hangi veri türüne örnektir?",
    options: [
      "A) Nümerik veriler",
      "B) Ordinal veriler",
      "C) Aralıklı nümerik veriler",
      "D) Binary veriler",
      "E) Ratio veriler",
    ],
    correctAnswer: "D) Binary veriler",
  },
  {
    id: 91,
    questionText:
      "97-) Aşağıdakilerden hangisi veri birleştirme aşamasında karşılaşabileceğiniz uyumsuzluklardan biri değildir?",
    options: [
      "A) Farklı zamanlara ait veriler",
      "B) farklı ölçü birimleri",
      "C) Güncelleme hataları",
      "D) Aynı formatta veriler",
      "E) Kodlama Farklılıkları",
    ],
    correctAnswer: "D) Aynı formatta veriler",
  },
  {
    id: 92,
    questionText:
      "98-) Aşağıdakilerden hangisi model kurma aşamalarından değildir?",
    options: [
      "A) Model Test Tasarımı Yapmak",
      "B) Model Tekniğini Seçmek",
      "C) Modeli Değerlendirmek",
      "D) Modeli Kurmak",
      "E) Modeli Analiz Etmek",
    ],
    correctAnswer: "E) Modeli Analiz Etmek",
  },
  {
    id: 93,
    questionText:
      "99-) Aşağıdakilerden hangisi Betimsel ve Keşifsel Yöntemlerden değildir?",
    options: [
      "A) Hiyerarşik Kümeleme Analizi",
      "B) K-ortalamalar Kümeleme Analizi",
      "C) Sınıflandırma Analizi",
      "D) Birliktelik Kuralları",
      "E) Kohonen Ağlar",
    ],
    correctAnswer: "C) Sınıflandırma Analizi",
  },
  {
    id: 94,
    questionText:
      "100-) K-means algoritmasının seçilmesinde aşağıdaki özelliklerden hangisi etkili değildir?",
    options: [
      "A) Küme sayısının okunan bir parametre olması analizi dar hale getirmektedir.",
      "B) Algoritmanın uygulanması kolaydır ve hızlı çalışmaktadır.",
      "C) Değişik dağılımlarda başarılı sonuçlar alınabilmektedir.",
      "D) Kategorik verilerle çalışacak şekilde adapte edilebilmektedir.",
      "E) Kümeleme sonuçları hem grafik olarak hem de yazı ve rakamlarla kolayca ifade edilebilmektedir.",
    ],
    correctAnswer:
      "A) Küme sayısının okunan bir parametre olması analizi dar hale getirmektedir.",
  },
  {
    id: 95,
    questionText:
      "101-) “Verilerin ilişkilendirilmiş, düzenlenmiş, anlamlandırılmış, işlenmiş halidir yani potansiyel olarak içinde bilgi barındıran bir veridir” Tanımı verilen kavram Aşağıdakilerden hangisidir?",
    options: [
      "A) Veri",
      "B) Bilgelik",
      "C) Bilgi",
      "D) Enformasyon",
      "E) Bilgi piramidi",
    ],
    correctAnswer: "D) Enformasyon",
  },
  {
    id: 96,
    questionText:
      "102-) “ Nümerik velilere benzer 100 santigrat derece 50 santigrat derecenin 2 katı denilemez ama derece kelvine çevrilirse 60 Kelvin 30 kelvinin 2 misli sıcak denilebilir. Yani oran verilebilir veri türlerine ..... Denir.” Tanımı verilen veri türü nedir?",
    options: [
      "A) Ratio veriler",
      "B) Orijinal veriler",
      "C) Nümerik veriler",
      "D) Binary veriler",
      "E) Nominal veriler",
    ],
    correctAnswer: "A) Ratio veriler",
  },
  {
    id: 97,
    questionText:
      "103-) Aşağıdakilerden hangisi eksik veri oluşmasına neden olmaz?",
    options: [
      "A) diğer veri kayıtlarıyla tutarsızlığı nedeniyle silinmesi",
      "B) Fazlasıyla veri kaydı ekleme",
      "C) Yanlış anlama sonucu kaydedilmeme",
      "D) Bazı nitelik değerleri hatalı olması dolayısıyla silinmesi",
      "E) Veri girişi sırasında bazı nitelikleri önemsiz görme",
    ],
    correctAnswer: "B) Fazlasıyla veri kaydı ekleme",
  },
  {
    id: 98,
    questionText:
      "104-) Derin öğrenme alanında kullanılan bir model olan CNN (Convolutional Neural Network), genellikle hangi tür veri setlerinde etkilidir?",
    options: [
      "A) Metin verileri",
      "B) Görüntü verileri",
      "C) Zamansal veriler",
      "D) Kategorik veriler",
      "E) Yapısal veriler",
    ],
    correctAnswer: "B) Görüntü verileri",
  },
  {
    id: 99,
    questionText:
      "105-) Bir veri setindeki ilişkileri ve desenleri keşfetmek için kullanılan bir derin öğrenme modeli hangisidir?",
    options: [
      "A) CNN (Convolutional Neural Network)",
      "B) LSTM (Uzun Kısa Süreli Bellek)",
      "C) RNN (Recurrent Neural Network)",
      "D) Decision Tree (Karar Ağacı)",
      "E) Naive Bayes",
    ],
    correctAnswer: "D) Decision Tree (Karar Ağacı)",
  },
  {
    id: 100,
    questionText:
      "106-) Veri dönüştürme sürecinde, veri değerlerinin 0 ile 1 arasında ölçeklenmesini sağlayan bir yöntem hangisidir?",
    options: [
      "A) Enk-Enb Normalleştirme",
      "B) z-Skor Normalleştirme",
      "C) Ondalık Ölçekleme",
      "D) Aralıklı Ölçümlendirilmiş Değişkenler",
      "E) Tam sayılı Değişkenler",
    ],
    correctAnswer: "C) Ondalık Ölçekleme",
  },
];
