import { Lesson } from "../types/quiz";

const AcikKaynak = [
  {
    id: 1,
    questionText:
      "1-) Aşağıdakilerden hangisi CPU-Programlama Algoritmalarını karşılaştırmak için kullanılan kriterlerden biri değildir?",
    options: [
      "A) Verimlilik",
      "B) Geri dönüş Süresi",
      "C) Bekleme Süresi",
      "D) Tepki Süresi",
      "E) G/Ç Süresi",
    ],
    correctAnswer: "E) G/Ç Süresi",
  },
  {
    id: 2,
    questionText:
      "2-) Aşağıdakilerden hangisi Zamanlama Algoritmalarından biri değildir?",
    options: [
      "A) FCFS",
      "B) SJF",
      "C) Thread Scheduling",
      "D) Priority Scheduling",
      "E) Multilevel Queue Scheduling",
    ],
    correctAnswer: "C) Thread Scheduling",
  },
  {
    id: 3,
    questionText:
      "3-) FCFS algoritmasına göre işlemler P1, P2, P3 sırası ile yapılırsa ortalama bekleme süresi ne olur?\n(P1 Burst Time: 24, P2 Burst Time: 3, P3 Burst Time: 3)",
    options: ["A) 16", "B) 17", "C) 18", "D) 19", "E) 20"],
    correctAnswer: "B) 17",
  },
  {
    id: 4,
    questionText:
      "4-) FCFS algoritmasına göre işlemler P2, P3, P1 sırası ile yapılırsa ortalama bekleme süresi ne olur?\n(P1 Burst Time: 24, P2 Burst Time: 3, P3 Burst Time: 3)",
    options: ["A) 7", "B) 6", "C) 5", "D) 4", "E) 3"],
    correctAnswer: "E) 3",
  },
  {
    id: 5,
    questionText:
      "5-) SJF algoritmasına göre işlemler P4, P1, P3, P2 sırası ile yapılırsa ortalama bekleme süresi ne olur?\n(P1 Burst Time: 6, P2 Burst Time: 8, P3 Burst Time: 7, P4 Burst Time: 3)",
    options: ["A) 7", "B) 6", "C) 5", "D) 4", "E) 3"],
    correctAnswer: "A) 7",
  },
  {
    id: 6,
    questionText:
      "6-) Hangi programlama algoritması, ilk önce CPU'yu ilk isteyen işlemciye tahsis eder?",
    options: [
      "A) FCFS",
      "B) SJF",
      "C) Thread Scheduling",
      "D) Priority Scheduling",
      "E) Multilevel Queue Scheduling",
    ],
    correctAnswer: "A) FCFS",
  },
  {
    id: 7,
    questionText:
      "7-) Aşağıdakilerden hangileri Shortest Job First algoritmasının türlerindendir?\nI. Kesilmesiz SJF  II. Yarı Kesilmesiz SJF  III. Kesilmeli SJF  IV. Yarı Kesilmeli SJF",
    options: [
      "A) I, II",
      "B) I, III",
      "C) II, IV",
      "D) I, II, III",
      "E) Hepsi",
    ],
    correctAnswer: "B) I, III",
  },
  {
    id: 8,
    questionText:
      "8-) Aşağıdakilerden hangisi bir CPU Scheduling algoritması için kriter olarak kullanılmaz?",
    options: [
      "A) Max. CPU Utilazation",
      "B) Min. Turnaround",
      "C) Max. Throughput",
      "D) Min. Response",
      "E) Max. Waiting",
    ],
    correctAnswer: "D) Min. Response",
  },
  {
    id: 9,
    questionText:
      "9-) Aşağıdakilerden hangisi Solaris zamanlamasında kullanılan sınıflardan değildir?",
    options: ["A) TS", "B) RT", "C) FSS", "D) FP", "E) FD"],
    correctAnswer: "E) FD",
  },
  {
    id: 10,
    questionText:
      "10-) Aşağıdakilerden hangisi WIN 32'de tanımlı öncelik sınıflarındandır?",
    options: [
      "A) TITLE PRIORITY CLASS",
      "B) LOW PRIORITY CLASS",
      "C) HIGH PRIORITY CLASS",
      "D) REAL PRIORITY CLASS",
      "E) ABOVE PRIORITY CLASS",
    ],
    correctAnswer: "C) HIGH PRIORITY CLASS",
  },
  {
    id: 11,
    questionText:
      "11-) İki veya daha fazla işlemin karşılıklı olarak birbirlerinin kullandığı kaynaklara erişmek istemesiyle oluşan sıkıntı ne olarak adlandırılır?",
    options: [
      "A) Donma",
      "B) Ölümcül Kilitlenme",
      "C) İşlem Önceliği",
      "D) Canlı Kilitlenme",
      "E) Bloklanma",
    ],
    correctAnswer: "B) Ölümcül Kilitlenme",
  },
  {
    id: 12,
    questionText:
      "12-) Herhangi bir zamanda sadece bir süreç kaynağı kullanabiliyor olması durumu hangi kilitlenme koşuludur?",
    options: [
      "A) Karşılıklı dışlama",
      "B) Tutup bekleme",
      "C) Boşaltılamazlık",
      "D) Dairesel bekleme",
      "E) Kaynak Ayırma",
    ],
    correctAnswer: "A) Karşılıklı dışlama",
  },
  {
    id: 13,
    questionText:
      "13-) En az bir kaynağı tutan bir süreç, başka süreçlerin tuttuğu kaynakları beklemesi hangi kilitlenme koşuludur?",
    options: [
      "A) Karşılıklı Dışlama",
      "B) Tutup Bekleme",
      "C) Boşaltılamazlık",
      "D) Dairesel Bekleme",
      "E) Kaynak Ayırma",
    ],
    correctAnswer: "B) Tutup Bekleme",
  },
  {
    id: 14,
    questionText:
      "14-) Aşağıdakilerden hangisi kilitlenme koşullarından değildir?",
    options: [
      "A) Karşılıklı Dışlama",
      "B) Tutup Bekleme",
      "C) Boşaltılamazlık",
      "D) Dairesel Bekleme",
      "E) Kaynak Ayırma",
    ],
    correctAnswer: "E) Kaynak Ayırma",
  },
  {
    id: 15,
    questionText:
      "15-) Kaynakların birden fazla kopyası olup, sürecin önceden ne kadar kaynak kullanacağını talep edildiği algoritma hangisidir?",
    options: [
      "A) Tespit Algoritması",
      "B) Güvenli Algoritma",
      "C) Kaynak Ayırma Çizgesi",
      "D) Banker's Algoritması",
      "E) Kök Algoritma",
    ],
    correctAnswer: "D) Banker's Algoritması",
  },
  {
    id: 16,
    questionText:
      "16-) Süreçlerin birbirilerinin kullandığı kaynakları ardı ardına beklemesi hangi kilitlenme-bekleme süreci olarak adlandırılır?",
    options: [
      "A) Karşılıklı Dışlama",
      "B) Tutup Bekleme",
      "C) Boşaltılamazlık",
      "D) Dairesel Bekleme",
      "E) Kaynak Ayırma",
    ],
    correctAnswer: "D) Dairesel Bekleme",
  },
  {
    id: 17,
    questionText:
      "17-) Eğer işletim sistemi bir kaynağı mevcut işlemden alıp başka bir işleme veremiyorsa, hangi kilitlenme süreci olarak adlandırılır?",
    options: [
      "A) Karşılıklı Dışlama",
      "B) Tutup Bekleme",
      "C) Boşaltılamazlık",
      "D) Dairesel Bekleme",
      "E) Kaynak Ayırma",
    ],
    correctAnswer: "C) Boşaltılamazlık",
  },
  {
    id: 18,
    questionText:
      "18-) Kaynak Ayırma Çizge Şemasına göre süreç kaynağı isteyince oluşan kenar durumu nedir?",
    options: [
      "A) Talep Kenarı",
      "B) İstek Kenarı",
      "C) Atama Kenarı",
      "D) Kaynak Kenar",
      "E) Açık Kenar",
    ],
    correctAnswer: "B) İstek Kenarı",
  },
  {
    id: 19,
    questionText:
      "19-) Kaynak Ayırma Çizge Şemasına göre süreç kaynağı bırakınca oluşan kenar durumu nedir?",
    options: [
      "A) Talep Kenarı",
      "B) İstek Kenarı",
      "C) Atama Kenarı",
      "D) Kaynak Kenar",
      "E) Açık Kenar",
    ],
    correctAnswer: "A) Talep Kenarı",
  },
  {
    id: 20,
    questionText:
      "20-) Aşağıdakilerden hangisi/hangileri kilitlenme yönetim yöntemlerinden biridir?\nI. Önleme  II. Sakınma  III. İzin verme-Kurtarma  IV. Görmezden Gelme",
    options: [
      "A) I-II",
      "B) III-IV",
      "C) Yalnız III",
      "D) I-II-IV",
      "E) Hepsi",
    ],
    correctAnswer: "E) Hepsi",
  },
  {
    id: 21,
    questionText:
      "21-) İşletim sistemi üzerinde işlenen verilerin tamamı RAM belleklerinden geçer. Bu verilerin RAM belleğe sığmaması durumunda işletim sistemi sabit diskten kendisine bir bölüm ayırır. Bu işleme ne denir?",
    options: [
      "A) Swapping",
      "B) Fragmantasyon",
      "C) Buffering",
      "D) Segmentasyon",
      "E) Paging",
    ],
    correctAnswer: "A) Swapping",
  },
  {
    id: 22,
    questionText:
      "22-) Aşağıdakilerden hangisi Swapping işleminin en önemli dezavantajıdır?",
    options: [
      "A) RAM dolduğunda sabit diske başvurulması",
      "B) RAM belleklerin yavaş olması",
      "C) Sabit diskin RAM belleklere göre yavaş olması",
      "D) Sabit diskte yeterince boş alan olmaması",
      "E) RAM belleklerin kapasitesinin çok fazla olması",
    ],
    correctAnswer: "C) Sabit diskin RAM belleklere göre yavaş olması",
  },
  {
    id: 23,
    questionText:
      "23-) Bellek üzerinde bulunan ancak bitişik olmayan kullanılabilir boş alanlara ne denir?",
    options: [
      "A) Swapping",
      "B) Fragmantasyon",
      "C) Buffering",
      "D) Segmentasyon",
      "E) Paging",
    ],
    correctAnswer: "B) Fragmantasyon",
  },
  {
    id: 24,
    questionText:
      "24-) İşletim sisteminin birden fazla işlemi yaparken her işlem için belleği uygun bir şekilde paylaştırması yöntemine ne denir?",
    options: [
      "A) Swapping",
      "B) Fragmantasyon",
      "C) Buffering",
      "D) Segmentasyon",
      "E) Paging",
    ],
    correctAnswer: "D) Segmentasyon",
  },
  {
    id: 25,
    questionText:
      "25-) Swapping, Paging ve Segmentasyon bellek teknolojilerinin kullanım amaçları nedir?",
    options: [
      "A) RAM bellek maliyetlerini düşürmek",
      "B) Sabit diski yavaş olduğu için kullanımını en aza indirmek",
      "C) Bellek alan yönetimini kolaylaştırmak ve performansı arttırmak",
      "D) Sabit diski en etkin şekilde kullanmak",
      "E) İşlemcinin RAM belleğe başvurusunu en aza indirmek",
    ],
    correctAnswer:
      "C) Bellek alan yönetimini kolaylaştırmak ve performansı arttırmak",
  },
  {
    id: 26,
    questionText: "26-) Ana bellekle ilgili verilenlerden hangisi yanlıştır?",
    options: [
      "A) Ana bellek işlemci ve sabit disk arasında köprü görevi görür",
      "B) Ana belleğin hızı sabit diskin hızından yüksektir",
      "C) Ana belleğin hızı işlemcinin hızından düşüktür",
      "D) Ana belleğin yüksek kapasiteli olması performansı arttırır",
      "E) Ana belleğin kapasitesi her zaman sabit diskten fazla olmalıdır",
    ],
    correctAnswer:
      "E) Ana belleğin kapasitesi her zaman sabit diskten fazla olmalıdır",
  },
  {
    id: 27,
    questionText: "27-) Ana bellekle ilgili aşağıdakilerden hangisi yanlıştır?",
    options: [
      "A) SRAM ve DRAM olarak ikiye ayrılır",
      "B) Elektrik kesildiğinde bilgileri saklamaya devam ederler",
      "C) İşlemciden hızlı sabit diskten yavaştır",
      "D) İşlemci ve sabit disk arasında köprü görevi görür",
      "E) Kendi hafızası dolduğunda hard diske başvurabilir",
    ],
    correctAnswer: "B) Elektrik kesildiğinde bilgileri saklamaya devam ederler",
  },
  {
    id: 28,
    questionText:
      "28-) Ana belleği diğer bellek çeşitlerinden ayıran en önemli özelliği hangisidir?",
    options: [
      "A) Sabit disklerden pahalı olması",
      "B) Ön bellekten yavaş olması",
      "C) Aktarım hızlarının yüksek olması",
      "D) Elektrik kesildiğinde bilgilerinin silinmesi",
      "E) Kapasitesinin sabit diske göre az olması",
    ],
    correctAnswer: "C) Aktarım hızlarının yüksek olması",
  },
  {
    id: 29,
    questionText:
      "29-) RAM belleğin hızı ……… hızından düşüktür. RAM belleğin bu hız düşüklüğüne ön bellek (cache) yardımcı olur ve RAM ile ……… arasındaki veri transferinde görev yapar. Hangisi boş bırakılan yere gelmelidir?",
    options: [
      "A) ROM bellek",
      "B) Ana kart",
      "C) CPU",
      "D) Sabit disk",
      "E) GPU",
    ],
    correctAnswer: "C) CPU",
  },
  {
    id: 30,
    questionText:
      "30-) RAM bellek ile ilgili aşağıda verilen bilgilerden hangisi yanlıştır?",
    options: [
      "A) Herhangi bir işlem yapılırken diskten okunan bilgiler ve işlem sonuçları gibi her şey önce buraya yazılır",
      "B) RAM bellekteki bilgiler, elektrik kesilmesi veya bilgisayarı kapatmamız durumunda kaybolur",
      "C) Bilgisayar her açıldığında bilgiler buraya yeniden yüklenir",
      "D) RAM'deki bilgiler kalıcıdır",
      "E) RAM bellek yönetimi için swapping, paging gibi yöntemler kullanılır",
    ],
    correctAnswer: "D) RAM'deki bilgiler kalıcıdır",
  },
  {
    id: 31,
    questionText:
      "31-) Sanal bellek kullanımı ile ilgili aşağıdakilerden hangisi yanlıştır?",
    options: [
      "A) Bir çok durumda programın tamamının bellekte bulunması gerekmez",
      "B) Kullanıcı fiziksel bellek sınırlamalarından kurtulur",
      "C) Daha fazla bellek program aynı anda yürütülebilir",
      "D) Daha fazla G/Ç işlemine sebep olur",
      "E) Programları daha hızlı yürütmeye olanak sağlar",
    ],
    correctAnswer: "D) Daha fazla G/Ç işlemine sebep olur",
  },
  {
    id: 32,
    questionText:
      "32-) Verilen bellek düzenlemesi şemasına göre A, B ve C sırasıyla neyi ifade etmektedir?\n(Şemada sol sütun A, orta kısım B, sağ sütun C olarak gösterilmiştir.)",
    options: [
      "A) fiziksel bellek, bellek haritalama, sanal bellek",
      "B) sanal bellek, bellek haritalama, fiziksel bellek",
      "C) fiziksel bellek, sanal bellek, bellek haritalama",
      "D) sanal bellek, fiziksel bellek, bellek haritalama",
      "E) Hiçbiri",
    ],
    correctAnswer: "B) sanal bellek, bellek haritalama, fiziksel bellek",
  },
  {
    id: 33,
    questionText:
      "33-) Bir işlemin koşturulması sırasında, işlem için gerekli olan sayfa ya da sayfaların bulunmaması durumunda oluşan hataya ne denir?",
    options: [
      "A) Sayfa hatası (page fault)",
      "B) Bellek hatası (memory error)",
      "C) Haritalama hatası (mapping error)",
      "D) Sanal hata (virtual fault)",
      "E) Hiçbiri",
    ],
    correctAnswer: "A) Sayfa hatası (page fault)",
  },
  {
    id: 34,
    questionText:
      "34-) Kullanıcının aynı anda birden fazla uygulama çalıştırmasına ne isim verilir?",
    options: [
      "A) multithreading",
      "B) multitasking",
      "C) multiprocessing",
      "D) multiprogramming",
      "E) multifuncitons",
    ],
    correctAnswer: "B) multitasking",
  },
  {
    id: 35,
    questionText:
      "35-) G/Ç fonksiyonları verinin hangi öğeler arasında transfer edilmesini sağlar?",
    options: [
      "A) Kaydediciler (registers)",
      "B) Prosesler",
      "C) G/Ç modülü ve işlemci",
      "D) G/Ç cihazları",
      "E) İşlemci çekirdekleri",
    ],
    correctAnswer: "C) G/Ç modülü ve işlemci",
  },
  {
    id: 36,
    questionText:
      "36-) Belleğe sayfa yerleştirme işleminde aşağıdakilerden hangisine gerek yoktur?",
    options: [
      "A) İstenilen sayfanın ikincil bellek üzerinden bulunması",
      "B) Ana bellek üzerinde boş çerçeve bulunması",
      "C) Boş çerçeve yok ise bir kurban çerçeve (victim frame) belrilenmesi",
      "D) Sayfaların defrag işlemine tabi tutulması",
      "E) Sayfanın çerçeve üzerine yerleştirilmesi",
    ],
    correctAnswer: "D) Sayfaların defrag işlemine tabi tutulması",
  },
  {
    id: 37,
    questionText:
      "37-) Aşağıdakilerden hangisi sayfa yeniden yerleştirme algoritmalarından biri değildir?",
    options: [
      "A) FIFO Algoritması",
      "B) Optimal Algoritması",
      "C) DGS Algoritması",
      "D) LRU Algoritması",
      "E) Hiçbiri",
    ],
    correctAnswer: "C) DGS Algoritması",
  },
  {
    id: 38,
    questionText:
      "38-) Tüm sayfa yerleşim algoritmaları içerisinde en düşük sayfa hatasına sahip algoritma hangisidir?",
    options: [
      "A) FIFO Algoritması",
      "B) Optimal Algoritması",
      "C) DGS Algoritması",
      "D) LRU Algoritması",
      "E) LIFO Algoritması",
    ],
    correctAnswer: "B) Optimal Algoritması",
  },
  {
    id: 39,
    questionText:
      "39-) Sayfa yerleşim algoritmaları için aşağıdaki ifadelerden hangisi hatalıdır?",
    options: [
      "A) LRU algoritması FIFO ile optimal algoritması arasında bir performansa sahiptir",
      "B) En az sayfa hatasına optimal algoritması sahiptir",
      "C) Optimal algoritması en uzun süre kullanılmayan sayfayı kurban olarak seçer",
      "D) LIFO Algoritması kuyruk yapısına benzer",
      "E) FIFO Algoritması en basit yerleştirme algoritmasıdır",
    ],
    correctAnswer: "D) LIFO Algoritması kuyruk yapısına benzer",
  },
  {
    id: 40,
    questionText:
      "40-) Sayfa hatası (page fault) için aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Sayfa hatası sıklığında önemli olan trashing'i önlemektir",
      "B) Sayfa isteği oranı çok küçükse işlemin fazla çerçevesi var demektir",
      "C) Sayfa isteği oranı büyükse işlemler daha fazla çerçeveye ihtiyaç duyuyor demektir",
      "D) Sayfa isteği oranı alt sınırın altına düşerse işleme çerçeve eklenir",
      "E) Sayfa isteği oranı kontrol edilmelidir",
    ],
    correctAnswer:
      "D) Sayfa isteği oranı alt sınırın altına düşerse işleme çerçeve eklenir",
  },
  {
    id: 41,
    questionText: "41-) Disklerin dakikadaki dönüş sayısına ne ad verilir?",
    options: ["A) RPM", "B) RDM", "C) NFS", "D) CLV", "E) CAV"],
    correctAnswer: "A) RPM",
  },
  {
    id: 42,
    questionText: "42-) Aşağıdakilerden hangisi yanlıştır?",
    options: [
      "A) En dış bölgedeki izler tipik olarak en iç bölgedeki izlerden %40 daha fazla sektör tutar",
      "B) Bir parça ne kadar uzak olursa, diskin ortasından uzaklaştıkça uzunluğu o kadar artar",
      "C) Dış bölgelerden iç bölgelere doğru hareket ettikçe, iz başına düşen sektör sayısı azalır",
      "D) Disk teknolojisi geliştikçe parça başına düşen sektör sayısı artmaktadır",
      "E) Sabit doğrusal hız kullanan ortamlarda, iz başına bitlerin yoğunluğu değişebilir",
    ],
    correctAnswer:
      "E) Sabit doğrusal hız kullanan ortamlarda, iz başına bitlerin yoğunluğu değişebilir",
  },
  {
    id: 43,
    questionText:
      "43-) Disk zamanlama algoritmaları ile ilgili aşağıdakilerden hangisi yanlıştır?",
    options: [
      "A) SCAN ve C-SCAN, diske ağır yük yükleyen sistemler için daha iyi performans gösterir",
      "B) SSTF FCFS'ye göre performansı arttırmaz",
      "C) Herhangi bir zamanlama algoritmasında performans, büyük ölçüde isteklerin sayısına ve türüne bağlıdır",
      "D) Herhangi bir istek listesi için optimal bir alım sırası belirleyebiliriz",
      "E) Optimal bir program bulmak için gereken hesaplama SSTF veya SCAN üzerindeki tasarrufları haklı göstermeyebilir",
    ],
    correctAnswer: "B) SSTF FCFS'ye göre performansı arttırmaz",
  },
  {
    id: 44,
    questionText:
      "44-) Disk yönetiminde bir diskin veri depolayabilmesi için, disk denetleyicisinin okuyabileceği ve yazabileceği sektörlere bölünmesi gerekir. Bu işleme ne ad verilir?",
    options: [
      "A) Düşük düzey biçimlendirme",
      "B) Düşük seviyeli formatlama",
      "C) Disk denetleyicisi",
      "D) Sektör numarası",
      "E) Disk yönetimi",
    ],
    correctAnswer: "A) Düşük düzey biçimlendirme",
  },
  {
    id: 45,
    questionText:
      "45-) Bir sektör için veri yapısı aşağıdakilerden hangisinden oluşur?",
    options: [
      "A) Veri yapısı ve başlık",
      "B) Römork ve başlık",
      "C) Başlık, veri alanı ve römork",
      "D) Başlık ve veri yapısı",
      "E) Veri alanı ve başlık",
    ],
    correctAnswer: "C) Başlık, veri alanı ve römork",
  },
  {
    id: 46,
    questionText:
      "46-) Bir disk sistemindeki paralellik, şeritleme yoluyla elde edildiği gibi iki ana amacı vardır. Aşağıdakilerden hangisi bu amaçlardandır?",
    options: [
      "A) Yük dengeleme ile çok sayıda küçük erişimin (sayfa erişimlerinin) verimini artırmak",
      "B) Büyük erişimlerin tepki süresini artırmak",
      "C) Sayfa erişimlerinin verimini azaltmak",
      "D) Küçük erişimlerin verimini azaltmak",
      "E) Küçük erişimlerin tepki süresini artırmak",
    ],
    correctAnswer:
      "A) Yük dengeleme ile çok sayıda küçük erişimin (sayfa erişimlerinin) verimini artırmak",
  },
  {
    id: 47,
    questionText:
      "47-) RAID seviyeleriyle ilgili aşağıdakilerden hangisi yanlıştır?",
    options: [
      "A) RAID 5 seviyesi, blok seviyesinde şeritleme yapan ancak herhangi bir fazlalık bulunmayan disk dizilerini ifade eder",
      "B) RAID 1 seviyesi, disk yansıtmayı ifade eder",
      "C) RAID 2 seviyesi, bellek stili hata düzeltme kodu (ECC) organizasyonu olarak da bilinir",
      "D) RAID 3 seviyesi, seviye 2'yi geliştiren bir yapıdır",
      "E) RAID 5 en yaygın RAID sistemidir",
    ],
    correctAnswer:
      "A) RAID 5 seviyesi, blok seviyesinde şeritleme yapan ancak herhangi bir fazlalık bulunmayan disk dizilerini ifade eder",
  },
  {
    id: 48,
    questionText:
      "48-) RAID seviye seçimi ile ilgili aşağıdakilerden hangisi yanlıştır?",
    options: [
      "A) RAID 2'nin yüksek alan ek yükü nedeniyle, RAID 5 genellikle büyük hacimli verilerin depolanması için tercih edilir",
      "B) Seviye 6 şu anda birçok RAID uygulaması tarafından desteklenmemektedir",
      "C) RAID 6 seviye 5'ten daha iyi güvenilirlik sunmaktadır",
      "D) Büyük disk setlerinin RAID 5'leri için zaman çizelgesi oluşturabilir",
      "E) Veriler başka bir diskten kopyalanabildiği için, yeniden oluşturma RAID seviye 1 için en kolaydır",
    ],
    correctAnswer:
      "A) RAID 2'nin yüksek alan ek yükü nedeniyle, RAID 5 genellikle büyük hacimli verilerin depolanması için tercih edilir",
  },
  {
    id: 49,
    questionText: "49-) ZFS ile ilgili verilen bilgilerden hangisi yanlıştır?",
    options: [
      "A) Her bir sistem için depolama alanını tahsis etmek ve serbest bırakmak için malloc() ve free() bellek modelini kullanamaz",
      "B) ZFS, bir sistemin boyutunu sınırlamak için kotalar sağlar",
      "C) Bir sistemin belirli bir miktarda büyümesini sağlamak için çekinceleri tutar",
      "D) Sistem yönetimi ve birim yönetimini tek bir ünitede birleştirir",
      "E) ZFS'nin genel performansı çok hızlıdır",
    ],
    correctAnswer:
      "A) Her bir sistem için depolama alanını tahsis etmek ve serbest bırakmak için malloc() ve free() bellek modelini kullanamaz",
  },
  {
    id: 50,
    questionText: "50-) WAFL hangi RAID seviyesinde kullanılır?",
    options: [
      "A) RAID seviye 1",
      "B) RAID seviye 3",
      "C) RAID seviye 2",
      "D) RAID seviye 4",
      "E) RAID seviye 0",
    ],
    correctAnswer: "D) RAID seviye 4",
  },
  {
    id: 51,
    questionText:
      "51-) Aşağıdakilerden hangisi dosya dizin yapısının amaçlarından değildir?",
    options: [
      "A) Dosya sistemlerinin işlevini açıklamak",
      "B) Dosya sistemlerine arayüzleri tanımlamak",
      "C) Erişim yöntemleri, dosya paylaşımı, dosya kilitleme ve dizin yapıları dahil olmak üzere dosya sistemi tasarım değişimlerinin tartışılması",
      "D) Dosya sistemi korumasını keşfetmek",
      "E) Komplex dosya sistemleri oluşturmak",
    ],
    correctAnswer: "E) Komplex dosya sistemleri oluşturmak",
  },
  {
    id: 52,
    questionText:
      "52-) Disk yapısı ile ilgili aşağıdakilerden hangisi yanlıştır?",
    options: [
      "A) Disk alt bölümlere ayrılamaz",
      "B) Disk ve bölüm işlenmemiş olarak yani dosya sistemi olmadan veya dosya sistemiyle biçimlendirilmiş olarak kullanılabilir",
      "C) Bölümler minidisk ve dilimler olarak bilinirler",
      "D) Dosya sistemlerini içeren oluşumlar birim olarak bilinir",
      "E) Dosya sistemini içeren her birim aynı zamanda o dosya sisteminin bilgisini aygıt dizininde veya içeriklerin birim tablosundan takip eder",
    ],
    correctAnswer: "A) Disk alt bölümlere ayrılamaz",
  },
  {
    id: 53,
    questionText:
      "53-) Aşağıdakilerden hangisi dosya işlemlerinden biri değildir?",
    options: [
      "A) Yaz",
      "B) Oku",
      "C) Yazma ve okuma noktasını değiştir",
      "D) Sil",
      "E) Boyutlandır",
    ],
    correctAnswer: "E) Boyutlandır",
  },
  {
    id: 54,
    questionText:
      "54-) Aşağıdaki dosya türü eşleştirmelerinden hangisi yanlıştır?",
    options: [
      "A) Executable – exe, com, bin",
      "B) Object – obj, o",
      "C) Text – txt, doc",
      "D) Library – arc, zip, tar",
      "E) Multimedia – mpeg, mov, rm",
    ],
    correctAnswer: "D) Library – arc, zip, tar",
  },
  {
    id: 55,
    questionText: "55-) Dosya paylaşımı ile ilgili hangisi yanlıştır?",
    options: [
      "A) Çok kullanıcılı sistemlerde dosya paylaşımı yapmak istenir",
      "B) Paylaşım bir koruma planı ile yapılabilir",
      "C) Dosya paylaşımına izin verilmez",
      "D) Dağıtık sistemler üzerinde dosyaları bir ağ üzerinden paylaşılabilir",
      "E) Ağ Dosya Sistemi (NFS) ortak dağıtılan dosya paylaşım yöntemidir",
    ],
    correctAnswer: "C) Dosya paylaşımına izin verilmez",
  },
  {
    id: 56,
    questionText: "56-) Aşağıdakilerden hangisi sıralı erişime örnektir?",
    options: [
      "A) read n",
      "B) read next",
      "C) write n",
      "D) position to n",
      "E) rewrite n",
    ],
    correctAnswer: "B) read next",
  },
  {
    id: 57,
    questionText:
      "57-) Aşağıdakilerden hangisi aygıt dizinindeki bilgilerden değildir?",
    options: [
      "A) Şuandaki uzunluğu",
      "B) Maksimum uzunluğu",
      "C) Son erişilen tarihi",
      "D) Tüm erişilme tarihleri",
      "E) Sahibi ID",
    ],
    correctAnswer: "D) Tüm erişilme tarihleri",
  },
  {
    id: 58,
    questionText: "58-) Uzak dosya sistemleri ile ilgili hangisi yanlıştır?",
    options: [
      "A) İstemci – Sunucu modeli istemcilerin sunuculardan uzak dosya sistemlerini kurmalarını sağlar",
      "B) Sunucu tek bir istemciye hizmet sağlayabilir",
      "C) NFS Standart UNIX istemci – sunucu dosya paylaşım protokolüdür",
      "D) CIFS standart Windows protokolüdür",
      "E) Standart işletim sistemi dosya çağrıları uzak çağrılara dönüştürülür",
    ],
    correctAnswer: "B) Sunucu tek bir istemciye hizmet sağlayabilir",
  },
  {
    id: 59,
    questionText:
      "59-) Aşağıdakilerden hangisi korumalı erişim türlerinden değildir?",
    options: [
      "A) Okumak",
      "B) Yazmak",
      "C) Çoğaltmak",
      "D) Eklemek",
      "E) Silmek",
    ],
    correctAnswer: "C) Çoğaltmak",
  },
  {
    id: 60,
    questionText: "60-) Aşağıdakilerden hangisi doğrudan erişime örnektir?",
    options: [
      "A) read next",
      "B) write next",
      "C) reset",
      "D) no read after last write",
      "E) rewrite n",
    ],
    correctAnswer: "E) rewrite n",
  },
  {
    id: 61,
    questionText:
      "61-) Aşağıdakilerden hangisinde PC'lerde 'interrupt controller' bağlantı noktası konumudur?",
    options: [
      "A) 000-00F",
      "B) 020-021",
      "C) 040-043",
      "D) 200-20F",
      "E) 320-32F",
    ],
    correctAnswer: "B) 020-021",
  },
  {
    id: 62,
    questionText:
      "62-) Bellek ile diğer aygıtlar arasındaki veri iletişimi için kullanılan, bu veri iletişimini sağlarken merkezi işlem birimini kısmen devre dışı bırakarak veri akışını hızlandıran yapı hangisidir?",
    options: [
      "A) SCSI",
      "B) PCI",
      "C) BUS",
      "D) DMA (Direct Access Memory)",
      "E) IDE Controller",
    ],
    correctAnswer: "D) DMA (Direct Access Memory)",
  },
  {
    id: 63,
    questionText:
      "63-) Aşağıdakilerden hangisi işletim sisteminin temel katmanları arasında gösterilemez?",
    options: [
      "A) Kullanıcı",
      "B) Kabuk (Shell)",
      "C) Çekirdek",
      "D) Sistem Çağrıları",
      "E) PCI Bus",
    ],
    correctAnswer: "E) PCI Bus",
  },
  {
    id: 64,
    questionText:
      "64-) Aşağıdaki işletim sistemi katmanlarından hangisi kullanıcıya en yakındır?",
    options: [
      "A) Çekirdek",
      "B) Sistem Çağrıları",
      "C) Kabuk",
      "D) Sistem Kütüphanesi",
      "E) Hiçbiri",
    ],
    correctAnswer: "C) Kabuk",
  },
  {
    id: 65,
    questionText:
      "65-) Herhangi bir hafıza alanında geçici bir kayıt alanıdır. Verilerin I/O işlemlerinden sonra belleğe yazılmadan önce uğranılan bir saha olarak tanımlanabilir. Bu tanım hangisidir?",
    options: ["A) Buffer", "B) RAM", "C) ROM", "D) HDD", "E) CMOS"],
    correctAnswer: "A) Buffer",
  },
  {
    id: 66,
    questionText:
      "66-) Small Computer System Interface'in (Küçük Bilgisayar Sistem Arabirimi) kısaltmasıdır. Unix sistemler tarafından çevre birimlerini sisteme bağlamak için kullanılan bir paralel arabirim standardıdır. Bu tanım hangisidir?",
    options: ["A) PCI", "B) SCSI", "C) AGP", "D) PCI-Express", "E) Hiçbiri"],
    correctAnswer: "B) SCSI",
  },
  {
    id: 67,
    questionText:
      "67-) İşletim sistemleri teorisinde sık kullanılan zamanlama kavramları vardır. Aşağıdakilerden hangisi bunlar arasında gösterilemez?",
    options: [
      "A) Bekleme zamanı (waiting time)",
      "B) Dönüş süresi (turnaround time)",
      "C) İş üretimi (throughput)",
      "D) Cevap süresi (response time)",
      "E) Kesme zamanı (Interrupt time)",
    ],
    correctAnswer: "E) Kesme zamanı (Interrupt time)",
  },
  {
    id: 68,
    questionText:
      "68-) Bir sistem çağrısının çoklu konumlar içeren çoklu I/O işlemleri gerçekleştirmesini sağlar. Tanımı yapılan I/O türü hangisidir?",
    options: [
      "A) Blokajlı I/O",
      "B) Vektörlü I/O",
      "C) Blokajsız I/O",
      "D) Senkron I/O",
      "E) Asenkron I/O",
    ],
    correctAnswer: "B) Vektörlü I/O",
  },
  {
    id: 69,
    questionText:
      "69-) UNIX işletim sisteminde ek bir tamsayı değişkeni bir hata kodu döndürmek için kullanılır. Bu hata kodu hangisidir?",
    options: ["A) readve", "B) errno", "C) select", "D) read", "E) write"],
    correctAnswer: "B) errno",
  },
  {
    id: 70,
    questionText:
      "70-) Unix sistemlerde bir uygulamanın sürücü kodunu boru hatlarına dinamik olarak monte etmeyi sağlayan mekanizma hangisidir?",
    options: [
      "A) streams",
      "B) caching",
      "C) spooling",
      "D) reservation",
      "E) Hiçbiri",
    ],
    correctAnswer: "A) streams",
  },
  {
    id: 71,
    questionText:
      "71-) Aşağıdaki ifadelerden hangileri koruma hedefleri arasında yer alır?\nI. Modern bir bilgisayar sisteminde korumanın amaçlarını ve ilkelerini tartışmak.\nII. Yetenek tabanlı koruma sistemlerini incelemek.\nIII. Dil tabanlı koruma sistemlerini incelemek.",
    options: [
      "A) Yalnız I",
      "B) Yalnız II",
      "C) I ve II",
      "D) I ve III",
      "E) I-II-III",
    ],
    correctAnswer: "E) I-II-III",
  },
  {
    id: 72,
    questionText:
      "72-) Yetkili ve yetkisiz kullanım arasındaki ayrımı hangi odaklı bir sistem sağlar?",
    options: [
      "A) Koruma Odaklı",
      "B) Karşılaştırma Odaklı",
      "C) Araştırma Odaklı",
      "D) Küresel Odaklı",
      "E) Alan Odaklı",
    ],
    correctAnswer: "A) Koruma Odaklı",
  },
  {
    id: 73,
    questionText:
      "73-) Aşağıdaki yöntemlerden hangisi Erişim matrisini etkili bir şekilde uygulamak için gerekli değildir?",
    options: [
      "A) Küresel tablo",
      "B) Karşılaştırma",
      "C) A kilit anahtar mekanizması",
      "D) Alan adları için yetenek listeleri",
      "E) Nesneler arası iletişim",
    ],
    correctAnswer: "E) Nesneler arası iletişim",
  },
  {
    id: 74,
    questionText:
      "74-) Aşağıdakilerden hangisi işletim sistemlerinin koruma prensiplerinden biri değildir?",
    options: [
      "A) İşletim sistemleri girişlerinin kullanıcı adı ve parola ile korunması",
      "B) Kablolu internet yerine kablosuz internet kullanılması",
      "C) Harici aygıtların gerekli olmadıkça kullanılmaması",
      "D) Sistem yamalarının ve bütününün güncel tutulması",
      "E) İşletim sistemi için güvenlik duvarının açık tutulması",
    ],
    correctAnswer: "B) Kablolu internet yerine kablosuz internet kullanılması",
  },
  {
    id: 75,
    questionText:
      "75-) Gizli dosyaların görüntülenmesi nereden gerçekleştirilir?",
    options: [
      "A) Konum/Gizli dosyaları göster",
      "B) Düzen/Gizli dosyaları göster",
      "C) Görünüm/Gizli dosyaları göster",
      "D) Git/Gizli dosyaları göster",
    ],
    correctAnswer: "C) Görünüm/Gizli dosyaları göster",
  },
  {
    id: 76,
    questionText:
      "76-) Şifreleme ve dosya izin hakları veren dosya sistemi hangisidir?",
    options: ["A) exFAT", "B) NTFS", "C) FAT16", "D) FAT32", "E) NEFT"],
    correctAnswer: "B) NTFS",
  },
  {
    id: 77,
    questionText:
      "77-) MS-DOS işletim sistemi için aşağıdakilerden hangisi söylenemez?",
    options: [
      "A) MS-DOS disk işletim sistemidir",
      "B) DOS, tüm x86 tabanlı PC'lerde çalışır",
      "C) Grafik kullanıcı arabirimini kullanmaz",
      "D) Çok görevli bir işletim sistemidir",
      "E) MS-DOS komut sistemi ile çalışır",
    ],
    correctAnswer: "D) Çok görevli bir işletim sistemidir",
  },
  {
    id: 78,
    questionText: "78-) Aşağıda yapılan eşleştirmelerden hangisi yanlıştır?",
    options: [
      "A) Windows 3.1 > grafik kullanıcı arabirimli bir işletim sistemidir",
      "B) Lovell Netwarev > Birden çok bilgisayarın bir ağ oluşturmasını sağlar",
      "C) Unix > çok kullanıcılı ve çok görevli bir işletim sistemidir",
      "D) Linux > Grafik ara yüzü olan ilk işletim sistemidir",
      "E) LILO > bilgisayarın Windows ve Linux ile birlikte dönüşümlü olarak açılabilmesini sağlayan bir mekanizması vardır",
    ],
    correctAnswer: "D) Linux > Grafik ara yüzü olan ilk işletim sistemidir",
  },
  {
    id: 79,
    questionText:
      "79-) Erişim haklarını iptal etmek gerektiğinde aşağıdaki sorulardan hangileri sorulur?\nI. Hemen karşı gecikmeli  II. Kısmi Toplam  III. Yeniden kazanma  IV. Seçmeli ve genel  V. Dolaylı Aktarım",
    options: [
      "A) I-II",
      "B) I-II-III",
      "C) I-IV-V",
      "D) I-II-III-V",
      "E) Hepsi",
    ],
    correctAnswer: "E) Hepsi",
  },
  {
    id: 80,
    questionText:
      "80-) Bir derleyici tarafından, yalnızca bir çekirdeğe dayanan uygulamanın göreceli değerleri hangilerdir?\nI. Güvenlik  II. Esneklik  III. Verimlilik",
    options: [
      "A) Yalnız I",
      "B) Yalnız II",
      "C) Yalnız III",
      "D) I-III",
      "E) I-II-III",
    ],
    correctAnswer: "E) I-II-III",
  },
  {
    id: 81,
    questionText:
      '81-) "Sistemin yasal olarak kullanılmasının engellenmesidir." Yukarıda bahsedilen güvenlik sorunu hangisidir?',
    options: [
      "A) Gizlilik ihlali",
      "B) Bütünlük ihlali",
      "C) Bulunabilirlik ihlali",
      "D) Servis Hırsızlığı",
      "E) Hizmet Reddi (DOS)",
    ],
    correctAnswer: "E) Hizmet Reddi (DOS)",
  },
  {
    id: 82,
    questionText:
      '82-) "Verilerin yetkisiz kişiler tarafından okunmasını veya çalınmasını ifade eder." Yukarıda bahsedilen güvenlik sorunu hangisidir?',
    options: [
      "A) Gizlilik ihlali",
      "B) Bütünlük ihlali",
      "C) Bulunabilirlik ihlali",
      "D) Servis Hırsızlığı",
      "E) Hizmet Reddi",
    ],
    correctAnswer: "A) Gizlilik ihlali",
  },
  {
    id: 83,
    questionText:
      '83-) "Verilerin veya kaynak kodların yetkisiz kişiler tarafından değiştirilmesidir." Yukarıda bahsedilen güvenlik sorunu hangisidir?',
    options: [
      "A) Gizlilik ihlali",
      "B) Bütünlük ihlali",
      "C) Bulunabilirlik ihlali",
      "D) Servis Hırsızlığı",
      "E) Hizmet Reddi",
    ],
    correctAnswer: "B) Bütünlük ihlali",
  },
  {
    id: 84,
    questionText:
      '84-) "Verilerin yetkisiz kişiler tarafından tahrip edilmesidir (Web site saldırıları vs)." Yukarıda bahsedilen güvenlik sorunu hangisidir?',
    options: [
      "A) Gizlilik ihlali",
      "B) Bütünlük ihlali",
      "C) Bulunabilirlik ihlali",
      "D) Servis Hırsızlığı",
      "E) Hizmet Reddi",
    ],
    correctAnswer: "C) Bulunabilirlik ihlali",
  },
  {
    id: 85,
    questionText:
      '85-) "Kaynakların izinsiz kullanılmasıdır." Yukarıda bahsedilen güvenlik sorunu hangisidir?',
    options: [
      "A) Gizlilik ihlali",
      "B) Bütünlük ihlali",
      "C) Bulunabilirlik ihlali",
      "D) Servis Hırsızlığı",
      "E) Hizmet Reddi",
    ],
    correctAnswer: "D) Servis Hırsızlığı",
  },
  {
    id: 86,
    questionText:
      "86-) Bir sistemi korumak için dört seviyede güvenlik tedbiri alınmalıdır. Aşağıdakilerden hangisi bu seviyelerden birisi değildir?",
    options: [
      "A) Fiziksel",
      "B) İnsan",
      "C) İşletim Sistemi",
      "D) Ağ",
      "E) Hiçbiri",
    ],
    correctAnswer: "E) Hiçbiri",
  },
  {
    id: 87,
    questionText:
      '87-) "Genellikle ücretsiz yazılımlarla birlikte sisteme yüklenen, tarayıcıda reklam sekmesi açan veya belirli siteler ziyaret edildiğinde açılır tarayıcı penceresi oluşturan ve bir programı bire bir taklit eden yazılımlar" olarak ifade edilen program tehdidi hangisidir?',
    options: [
      "A) Truva Atı",
      "B) Tuzak Kapıları",
      "C) Solucan",
      "D) Mantık Bombası",
      "E) Virüsler",
    ],
    correctAnswer: "A) Truva Atı",
  },
  {
    id: 88,
    questionText:
      '88-) "Tespiti zordur. Programın normal çalışması sırasında güvenlik açığı fark edilememektedir. Ancak önceden belirlenmiş bir dizi parametre kullanımı sonrasında güvenlik açığı oluşur." Yukarıda bilgi verilen program tehdidi hangisidir?',
    options: [
      "A) Truva Atı",
      "B) Tuzak Kapıları",
      "C) Solucan",
      "D) Mantık Bombası",
      "E) Virüsler",
    ],
    correctAnswer: "D) Mantık Bombası",
  },
  {
    id: 89,
    questionText:
      "89-) \"Bir programa gömülü zararlı kod parçasıdır. Kendi kendini kopyalamak ve diğer programlara 'bulaşmak' için tasarlanmıştır. Dosyaları değiştirerek veya tahrip ederek, sistem çökmelerine ve program arızalarına neden olarak sisteme zarar verebilirler.\" Bu program tehdidi hangisidir?",
    options: [
      "A) Truva Atı",
      "B) Tuzak Kapıları",
      "C) Solucan",
      "D) Mantık Bombası",
      "E) Virüsler",
    ],
    correctAnswer: "E) Virüsler",
  },
  {
    id: 90,
    questionText:
      '90-) "Kendisini çoğaltmak için spawn mekanizmasını kullanan bir işlemdir. Sistem kaynaklarını kullanan ve tüm diğer işlemleri kilitleyen, kendi kopyalarını çıkaran zararlı yazılımlardır. Bilgisayar ağlarında özellikle güçlüdür." Bu program tehdidi hangisidir?',
    options: [
      "A) Truva Atı",
      "B) Tuzak Kapıları",
      "C) Solucan",
      "D) Mantık Bombası",
      "E) Virüsler",
    ],
    correctAnswer: "C) Solucan",
  },
  {
    id: 91,
    questionText:
      "91-) Bir sanal makine ………, ………… veya ………… ile uygulanabilir. Cümlesindeki boş yerlere ne gelmelidir?",
    options: [
      "A) Yazılım, donanım veya bir kombinasyon",
      "B) Kurulum, yapılandırma, doğrudan indirme bağlantısı",
      "C) Araştırma, yürütülebilir dosya, disk",
      "D) Sanal makine uygulaması, işletim sistemi dosyası, fiziksel bilgisayar",
      "E) Windows, Linux, Unix",
    ],
    correctAnswer: "A) Yazılım, donanım veya bir kombinasyon",
  },
  {
    id: 92,
    questionText:
      "92-) Aşağıdakilerden hangisi sanallaştırmanın türleri arasında yer almaz?",
    options: [
      "A) Masaüstü Sanallaştırma",
      "B) Uygulama Sanallaştırması",
      "C) Depolama Sanallaştırma",
      "D) İşlemci Sanallaştırma",
      "E) Ağ Sanallaştırması",
    ],
    correctAnswer: "D) İşlemci Sanallaştırma",
  },
  {
    id: 93,
    questionText:
      "93-) Aşağıdakilerden hangisi sanallaştırmanın temel faydalarından değildir?",
    options: [
      "A) Fiziksel kısıtlamaların ortadan kalkması",
      "B) Tek bir merkezden pek çok sunucunun yönetilebilmesi sayesinde yönetimsel yükün minimuma indirilmesi",
      "C) Alt yapı maliyetlerinin büyük oranla aşağı çekilmesi",
      "D) Yeni sunucuların kullanıma sokulması işleminin fiziksel sunuculara oranla oldukça kısa sürmesi",
      "E) Aynı makine üzerinde hem Windows hem de Android tabanlı işletim sistemlerini çalıştırabilme",
    ],
    correctAnswer:
      "E) Aynı makine üzerinde hem Windows hem de Android tabanlı işletim sistemlerini çalıştırabilme",
  },
  {
    id: 94,
    questionText:
      "94-) Sunucu sanallaştırma teknolojileri alanında kurumsal sanallaştırma çözümleri sunan yazılımlardan değildir?",
    options: [
      "A) VirtualServerX",
      "B) Microsoft Hyper-V",
      "C) ESXServer",
      "D) Xen",
      "E) VirtualPC",
    ],
    correctAnswer: "A) VirtualServerX",
  },
  {
    id: 95,
    questionText:
      '95-) "Sanallaştırma; sahip olduğumuz fiziksel donanımı, sanal makineler yardımıyla, ………………………. birden fazla sistem veya modül koşturabileceğimiz hâle getirme işidir". Boş olan yere aşağıdakilerden hangisi gelmelidir?',
    options: [
      "A) Birbirinden bağımsız",
      "B) Benzer ilişkisi olan",
      "C) Bir arada tutan",
      "D) Bir takım sistemleri",
      "E) Belirli işleri",
    ],
    correctAnswer: "A) Birbirinden bağımsız",
  },
  {
    id: 96,
    questionText:
      "96-) Aşağıdakilerden hangisi sanallaştırmanın faydaları arasında yer almaz?",
    options: [
      "A) Veri merkezinde ihtiyaç duyulan fiziksel ekipmanların sayısını azaltır",
      "B) Yüksek oranda konsolidasyon yapılabilmesi veri merkezinin daha çevreci olmasını sağlar",
      "C) İhtiyaç halinde çok hızlı şekilde sunucu ve depolama kaynağı oluşturulmasına imkan sağlar",
      "D) Donanım maliyetlerini önemli oranda artmasını sağlar",
      "E) Sistem kaynaklarının yüksek verimlilikle kullanılmasını sağlar",
    ],
    correctAnswer: "D) Donanım maliyetlerini önemli oranda artmasını sağlar",
  },
  {
    id: 97,
    questionText:
      "97-) Aşağıdakilerden hangisi ya da hangileri sanallaştırma sistemlerinden birisidir?\nI. VMWARE  II. HYPER-V  III. CITRIX XENSERVER",
    options: [
      "A) Yalnız I",
      "B) Yalnız II",
      "C) I ve II",
      "D) II ve III",
      "E) I, II ve III",
    ],
    correctAnswer: "E) I, II ve III",
  },
  {
    id: 98,
    questionText:
      "98-) Sanallaştırma fiziksel yapının (Donanım) mantıksal hale getirilmesidir. Bu işlem için 4 temel donanım sanallaştırılmaktadır. Aşağıdakilerden hangisi bu 4 donanımdan birisi değildir?",
    options: ["A) CPU", "B) RAM", "C) HDD", "D) NIC", "E) E-USB"],
    correctAnswer: "E) E-USB",
  },
  {
    id: 99,
    questionText:
      "99-) Bazı bilgisayar sistemlerinde yedekleri test etmek için kullandığınız bir kurtarma servisi yedeği vardır. Test yedekleri iki korumalı sanal makine içermektedir. Kurtarma hizmetleri yedeğini silmeniz istenirse ilk önce ne yapılmalıdır?",
    options: [
      "A) Kurtarma Hizmeti yedeğinde, her yedekleme öğesinin yedeklemesini durdurulur",
      "B) Kurtarma Servisi yedeğinden yedek verileri silinir",
      "C) Her sanal makinenin olağanüstü durum kurtarma özelliklerini değiştirilir",
      "D) Her sanal makinenin şifreleri değiştirilir",
      "E) Hiçbir şey yapmaya gerek yoktur",
    ],
    correctAnswer:
      "A) Kurtarma Hizmeti yedeğinde, her yedekleme öğesinin yedeklemesini durdurulur",
  },
  {
    id: 100,
    questionText:
      "100-) Aşağıdakilerden hangisi sanal makine uygulamaları içinde yer almamaktadır?",
    options: [
      "A) Sanal Makine Yaşam Döngüsü",
      "B) Tip 0 Hiper Yönetici",
      "C) Tip 1 Hiper Yönetici",
      "D) Tip 2 Hiper Yönetici",
      "E) Tip 3 Hiper Yönetici",
    ],
    correctAnswer: "E) Tip 3 Hiper Yönetici",
  },
  {
    id: 101,
    questionText:
      '101-) "Dağıtık bir sistem heterojen bilgisayarları ve ağları desteklemek için mantıksal olarak yüksek-seviyeli katmanlarla daha düşük katmanlar arasında bir yazılımsal katmanı önermektedirler." Tanımı verilen kavram hangisidir?',
    options: [
      "A) Software",
      "B) Sunucu",
      "C) İstemci",
      "D) MiddleWare",
      "E) Site",
    ],
    correctAnswer: "D) MiddleWare",
  },
  {
    id: 102,
    questionText:
      "102-) Aşağıdakilerden hangisi dağıtık sistemlerin avantajlarından değildir?",
    options: [
      "A) Kaynak Paylaşımı",
      "B) İletişim",
      "C) Hesaplama Hızı",
      "D) Göç",
      "E) Güvenilirlik",
    ],
    correctAnswer: "D) Göç",
  },
  {
    id: 103,
    questionText:
      "103-) Aşağıdakilerden hangisi dağıtık sistem kapsamında yer almaz?",
    options: [
      "A) İnternet",
      "B) Sunucu",
      "C) İntranet",
      "D) Kablosuz Ağlar",
      "E) Uydu Bağlantısı",
    ],
    correctAnswer: "B) Sunucu",
  },
  {
    id: 104,
    questionText:
      "104-) Dağıtık sistemlerde işlem geçişi yapılırken hangisi göz önünde bulundurulmaz?",
    options: [
      "A) Donanım Tercihi",
      "B) Yazılım Tercihi",
      "C) Veri Göçü",
      "D) Yük Dengeleme",
      "E) Hesaplama Hızlandırması",
    ],
    correctAnswer: "C) Veri Göçü",
  },
  {
    id: 105,
    questionText:
      "105-) Aşağıdakilerden hangisi iletişim yapısının ele aldığı konulardan değildir?",
    options: [
      "A) Adlandırma ve ad çözümlemesi",
      "B) Yönlendirme stratejileri",
      "C) Bağlantı stratejileri",
      "D) Çekişme",
      "E) Hesaplama Hızlandırması",
    ],
    correctAnswer: "E) Hesaplama Hızlandırması",
  },
  {
    id: 106,
    questionText:
      "106-) Aşağıdakilerden hangisi yönlendirme stratejilerinden değildir?",
    options: [
      "A) Sabit",
      "B) Sanal",
      "C) Tradeoff",
      "D) Dinamik",
      "E) OpenFlow",
    ],
    correctAnswer: "C) Tradeoff",
  },
  {
    id: 107,
    questionText:
      "107-) Aşağıdakilerden hangisi tasarım sorunlarından değildir?",
    options: [
      "A) Şeffaflık",
      "B) Güvenilirlik",
      "C) Hata toleransı",
      "D) Ölçeklenebilirlik",
      "E) Hadoop",
    ],
    correctAnswer: "B) Güvenilirlik",
  },
  {
    id: 108,
    questionText:
      "108-) Aşağıdakilerden hangisi sistemdeki güvenlik mekanizmalarından değildir?",
    options: [
      "A) Şifreleme",
      "B) Doğrulama",
      "C) Yetkilendirme",
      "D) Reddedilme",
      "E) Ulaşılabilirlik",
    ],
    correctAnswer: "D) Reddedilme",
  },
  {
    id: 109,
    questionText:
      "109-) Blowfish, RSA sistem güvenlik mekanizmalarından hangisini kullanır?",
    options: [
      "A) Encryption",
      "B) Authentication",
      "C) Authorization",
      "D) Availability",
      "E) Inability rejected",
    ],
    correctAnswer: "A) Encryption",
  },
  {
    id: 110,
    questionText:
      '110-) "Düzenli aralıklarla önbellek tara ve son taramadan bu yana değiştirilmiş blokların temizlenme işidir." Tanımı verilen kavram hangisidir?',
    options: [
      "A) Hadoop",
      "B) OpenFlow",
      "C) Cleaner",
      "D) MiddleWare",
      "E) Varyasyon",
    ],
    correctAnswer: "E) Varyasyon",
  },
  {
    id: 111,
    questionText:
      "111-) Aşağıdaki işletim sistemi katmanlarından hangisi donanıma en yakındır?",
    options: [
      "A) Çekirdek",
      "B) Sistem Çağrıları",
      "C) Kabuk",
      "D) Uygulamalar",
      "E) Kullanıcı",
    ],
    correctAnswer: "A) Çekirdek",
  },
  {
    id: 112,
    questionText:
      "112-) İşletim sistemi katmanları için en alttan üste doğru düşünürsek aşağıdakilerden hangisi doğrudur?",
    options: [
      "A) Donanım – Çekirdek – Sistem Çağrıları – Kabuk – Kullanıcı",
      "B) Donanım – Sistem Çağrıları – Çekirdek – Kabuk – Kullanıcı",
      "C) Donanım – Kabuk – Çekirdek – Sistem Çağrıları – Kullanıcı",
      "D) Donanım – Kabuk – Sistem Çağrıları – Çekirdek – Kullanıcı",
      "E) Donanım – Çekirdek – Kabuk – Sistem Çağrıları – Kullanıcı",
    ],
    correctAnswer:
      "A) Donanım – Çekirdek – Sistem Çağrıları – Kabuk – Kullanıcı",
  },
  {
    id: 113,
    questionText: '113-) Linux dosya sisteminde "inode" neyi temsil eder?',
    options: [
      "A) Açık dosyayı temsil eder",
      "B) Süper bloğu temsil eder",
      "C) Bir dizini temsil eder",
      "D) Yalnızca bir bloğu temsil eder",
      "E) Bir dosyayı temsil eder",
    ],
    correctAnswer: "E) Bir dosyayı temsil eder",
  },
  {
    id: 114,
    questionText:
      '114-) Linux dosya sisteminde "süper blok" nesnesi neyi temsil eder?',
    options: [
      "A) Bir Dosyayı temsil eder",
      "B) Bütün bir dosya sistemini temsil eder",
      "C) Bir dizini temsil eder",
      "D) Açık Bir Dosyayı temsil eder",
      "E) Yalnızca gizli bir dosyayı temsil eder",
    ],
    correctAnswer: "B) Bütün bir dosya sistemini temsil eder",
  },
  {
    id: 115,
    questionText:
      '115-) Linux dosya sistemi işlemlerinden "open(…)" komutu nasıl bir işlem gerçekleştirir?',
    options: [
      "A) Bir dosyayı açar",
      "B) Bir dosyayı okur",
      "C) Dosyaya yazma işlemi yapar",
      "D) Bir dosyayı belleğe alır",
      "E) Bir dosyayı siler",
    ],
    correctAnswer: "A) Bir dosyayı açar",
  },
  {
    id: 116,
    questionText:
      '116-) Linux dosya sistemi işlemlerinden "mmap(…)" komutu nasıl bir işlem gerçekleştirir?',
    options: [
      "A) Bir dosyayı açar",
      "B) Bir dosyayı okur",
      "C) Dosyaya yazma işlemi yapar",
      "D) Bir dosyayı belleğe alır",
      "E) Bir dosyayı siler",
    ],
    correctAnswer: "D) Bir dosyayı belleğe alır",
  },
  {
    id: 117,
    questionText:
      "117-) Buddy sisteminde bellek ideal yer tahsisi yapmak için bellek her seferinde hangi oranlarla bölünür?",
    options: [
      "A) Her seferinde %10 - %90 olarak iki parçaya bölünür",
      "B) Her seferinde %30 - %70 olarak iki parçaya bölünür",
      "C) Her seferinde %50 - %50 olarak iki parçaya bölünür",
      "D) Her seferinde %40 - %60 olarak iki parçaya bölünür",
      "E) Her seferinde %80 - %20 olarak iki parçaya bölünür",
    ],
    correctAnswer: "C) Her seferinde %50 - %50 olarak iki parçaya bölünür",
  },
  {
    id: 118,
    questionText:
      "118-) Aşağıdakilerden hangisi bir process (süreç) özelliklerinden değildir?",
    options: [
      "A) Process ID",
      "B) Credentials (Kimlik Bilgisi)",
      "C) Personality (Kişilik)",
      "D) Namespace",
      "E) Parent memory",
    ],
    correctAnswer: "E) Parent memory",
  },
  {
    id: 119,
    questionText:
      "119-) Kendi kimliği ile yeni bir thread oluşmasını sağlayan sistem çağrısı hangisidir?",
    options: [
      "A) Fork()",
      "B) Open()",
      "C) Delete()",
      "D) Clone()",
      "E) Close()",
    ],
    correctAnswer: "D) Clone()",
  },
  {
    id: 120,
    questionText:
      "120-) Yeni bir kimlikle yeni bir thread oluşmasını sağlayan sistem çağrısı hangisidir?",
    options: [
      "A) Fork()",
      "B) Open()",
      "C) Delete()",
      "D) Clone()",
      "E) Close()",
    ],
    correctAnswer: "A) Fork()",
  },
  {
    id: 121,
    questionText:
      "121-) Aşağıdakilerden hangisi Windows 7 tasarım ilkelerinden değildir?",
    options: [
      "A) basitlik",
      "B) güvenlik",
      "C) güvenilirlik",
      "D) yüksek performans",
      "E) taşınabilirlik",
    ],
    correctAnswer: "A) basitlik",
  },
  {
    id: 122,
    questionText:
      "122-) Win32'de zamanlama dört öncelik sınıfından yararlanır. Aşağıdakilerden hangisi Win32 öncelik sınıfı değildir?",
    options: [
      "A) IDLE_PRIORITY_CLASS",
      "B) LOW_PRIORITY_CLASS",
      "C) NORMAL_PRIORITY_CLASS",
      "D) HIGH_PRIORITY_CLASS",
      "E) REALTIME_PRIORITY_CLASS",
    ],
    correctAnswer: "B) LOW_PRIORITY_CLASS",
  },
  {
    id: 123,
    questionText:
      "123-) Windows NT 4.0 ile çekirdeğe taşınan ………………………… implementasyonu Windows Vista ile tekrar user mode tarafına alınmaya başlamıştır. Boşluğa gelecek olan kavramı seçiniz.",
    options: ["A) POSIX", "B) WIN32", "C) DWM", "D) ActiveDirectory", "E) GUI"],
    correctAnswer: "E) GUI",
  },
  {
    id: 124,
    questionText:
      "124-) Windows mimarisi katmanlı sistem modüllerinden oluşur. Aşağıdakilerden hangisi Windows 7 sistem bileşenlerinden değildir?",
    options: [
      "A) kernel",
      "B) kernel dispatcher",
      "C) gaming manager",
      "D) object manager",
      "E) virtual memory manager",
    ],
    correctAnswer: "C) gaming manager",
  },
  {
    id: 125,
    questionText:
      "125-) NTFS dosya sisteminde her dosyanın tanımlarının tutulduğu tablo hangisidir?",
    options: [
      "A) Master File Table",
      "B) Slave File Table",
      "C) File Table",
      "D) Original File Table",
      "E) Sector File Table",
    ],
    correctAnswer: "A) Master File Table",
  },
  {
    id: 126,
    questionText:
      "126-) Windows 7 hem peer to peer hem de client/server network destekler. Bir oturum katmanı bileşeninin mevcut herhangi bir taşıma mekanizmasını kullanmasını sağlayan aktarım sürücüsü arayüzünün kısaltması nedir?",
    options: ["A) TSI", "B) TFSI", "C) TDI", "D) CDTI", "E) HDI"],
    correctAnswer: "C) TDI",
  },
  {
    id: 127,
    questionText:
      "127-) Aşağıdakilerden hangisi Server Message Block Protocol (SMB) mesaj tiplerinden değildir?",
    options: [
      "A) Session control",
      "B) File",
      "C) Printer",
      "D) Message",
      "E) Disk",
    ],
    correctAnswer: "E) Disk",
  },
  {
    id: 128,
    questionText:
      "128-) Bir Windows bilgisayarın donanımına güç verildiğinde ve firmware ROM'u yüklendikten sonra başlayan sürece ne ad verilir?",
    options: ["A) booting", "B) BIOS", "C) UEFI", "D) start", "E) hiçbiri"],
    correctAnswer: "A) booting",
  },
  {
    id: 129,
    questionText:
      "129-) Windows birçok konfigürasyon bilgisini hive (kovan) olarak adlandırılan iç veritabanlarında tutar. Bu anahtar-değer veritabanı yapısının adı nedir?",
    options: ["A) DBMS", "B) VTYS", "C) MySQL", "D) Registry", "E) MsSQL"],
    correctAnswer: "D) Registry",
  },
  {
    id: 130,
    questionText:
      "130-) Windows güç yöneticisi (power manager) bileşeni tarafından bilgisayarın ana belleğindeki verilerin sabit belleğe kaydedilerek sistemin kapatılması işlemine ne ad verilir?",
    options: [
      "A) power save",
      "B) disk save",
      "C) sleep",
      "D) wake",
      "E) hibernate",
    ],
    correctAnswer: "E) hibernate",
  },
  {
    id: 131,
    questionText:
      "131-) Atlas'ın en dikkat çekici özelliği ve onu etkin kılan en önemli özelliği ………….dir. Boşluğa gelmesi gereken en uygun seçenek hangisidir?",
    options: [
      "A) Bellek Yönetimi",
      "B) Hızlı olması",
      "C) Ekonomik olması",
      "D) Hesaplama Aracı olması",
      "E) Hiçbiri",
    ],
    correctAnswer: "A) Bellek Yönetimi",
  },
  {
    id: 132,
    questionText:
      "132-) Atlas işletim sistemi ……kelimelik bir İngiliz bilgisayarı kullandı. Boşluğa gelmesi gereken en uygun seçenek hangisidir?",
    options: ["A) 16 bit", "B) 32 bit", "C) 48 bit", "D) 64 bit", "E) 128 bit"],
    correctAnswer: "C) 48 bit",
  },
  {
    id: 133,
    questionText:
      "133-) XDS-940 işletim sistemi Atlas sisteminin aksine, …………….. bir sistemdir. Boşluğa gelmesi gereken en uygun seçenek hangisidir?",
    options: [
      "A) Zaman paylaşımlı",
      "B) Bellek Paylaşımlı",
      "C) hız artırımlı",
      "D) sanal hafızasız",
      "E) Hiçbiri",
    ],
    correctAnswer: "A) Zaman paylaşımlı",
  },
  {
    id: 134,
    questionText:
      "134-) XDS-940 Süreç sistemi hangi seçenekte doğru sıralama ile verilmiştir?",
    options: [
      "A) Alt süreçleri başlat, askıya al ve yok et",
      "B) Alt süreçleri askıya al, yok et ve başlat",
      "C) Alt süreçleri yok et, başlat ve askıya al",
      "D) Alt süreçleri başlat, yok et ve askıya al",
      "E) Hiçbiri",
    ],
    correctAnswer: "A) Alt süreçleri başlat, askıya al ve yok et",
  },
  {
    id: 135,
    questionText: "135-) Aşağıdakilerden hangisi bir işletim sistemi değildir?",
    options: ["A) MULTICS", "B) THE", "C) XDS-940", "D) RC 4000", "E) AKOM"],
    correctAnswer: "E) AKOM",
  },
  {
    id: 136,
    questionText:
      '136-) "Çekirdek eşzamanlı işlemlerin toplanmasını desteklemekteydi. Çevrimsel sıralı CPU, zaman planı uygulayıcısı kullanılmıştı. İşlemler sekiz kelime uzunluğundaki sabit boyda mesajların değişimi ile birbirleriyle iletişim kurabilmekteydi. Tüm mesajlar ortak bir ara bellek alanından arabelleklerde saklanmaktaydı." Bahsi geçen işletim sistemi hangisidir?',
    options: ["A) MULTICS", "B) THE", "C) XDS-940", "D) RC 4000", "E) ATLAS"],
    correctAnswer: "D) RC 4000",
  },
  {
    id: 137,
    questionText:
      "137-) RC 4000 işletim sistemi mesaj konusunda aşağıdaki seçeneklerden hangisini desteklemektedir?",
    options: [
      "A) mesaj gönderme",
      "B) mesaj bekleme",
      "C) cevap yollama",
      "D) cevap bekleme",
      "E) hepsi",
    ],
    correctAnswer: "E) hepsi",
  },
  {
    id: 138,
    questionText:
      "138-) MULTICS işletim sistemi 1965'den 1970'e kadar …….'nin doğal bir uzantısı olarak MIT'de tasarlanmıştır. Boşluğa gelmesi gereken en uygun seçenek hangisidir?",
    options: ["A) CTSS", "B) THE", "C) XDS-940", "D) RC 4000", "E) ATLAS"],
    correctAnswer: "A) CTSS",
  },
  {
    id: 139,
    questionText:
      "139-) DEC'in işletim sistemlerinin en etkili olanı …….'dir. Boşluğa gelmesi gereken en uygun seçenek hangisidir?",
    options: ["A) CTSS", "B) THE", "C) TOPS-20", "D) RC 4000", "E) ATLAS"],
    correctAnswer: "C) TOPS-20",
  },
  {
    id: 140,
    questionText:
      "140-) İlk sistem programlama dilinde yazılmış işletim sistemi hangisidir?",
    options: ["A) CTSS", "B) MCP", "C) TOPS-20", "D) RC 4000", "E) ATLAS"],
    correctAnswer: "B) MCP",
  },
];

const DijitalPazarlama = [
  {
    id: 1,
    questionText: "1-) Aşağıda cümlelerden hangisi liderlik için doğrudur?",
    options: [
      "A) Günümüz işletmelerinde bütün liderler yöneticidir.",
      "B) Formal hakları yöneticiyi etkin liderlik etme konusunda yetkin kılar.",
      "C) Bütün yöneticiler liderdir.",
      "D) Bütün liderler takip edenlerinin hiyerarşik olarak üstü konumundadır.",
      "E) Kendiliğinden ortaya çıkan liderlik, formal etki kadar hatta ondan daha önemlidir.",
    ],
    correctAnswer:
      "E) Kendiliğinden ortaya çıkan liderlik, formal etki kadar hatta ondan daha önemlidir.",
  },
  {
    id: 2,
    questionText:
      "2-) Aşağıdakilerden hangisinde liderlik fonksiyonunun değişkenleri tam olarak verilmiştir?",
    options: [
      "A) yönetici, izleyiciler ve kurallar",
      "B) yönetici, takipçiler ve değişkenler",
      "C) veriler, senaryolar ve kurallar",
      "D) lider, izleyiciler ve koşullar",
      "E) faaliyet, süreç ve yöntemler",
    ],
    correctAnswer: "D) lider, izleyiciler ve koşullar",
  },
  {
    id: 3,
    questionText: "3-) Tanım olarak liderlik, ………………… sürecidir.",
    options: [
      "A) Organizasyonel politikalar",
      "B) Yetki verme",
      "C) Etkileme",
      "D) Zorlama",
      "E) Katılımcı yönetim",
    ],
    correctAnswer: "C) Etkileme",
  },
  {
    id: 4,
    questionText:
      "4-) I. Liderlik, liderin, takipçilerin ve koşulların bir fonksiyonudur.\nII. Liderlik, çalışanları organizasyonel amaçlara ulaşmak için etkileyebilme yeteneğidir.\nIII. Liderlik bir meslektir ancak yöneticilik insanları etkileyerek amaçlar doğrultusunda harekete geçirme gücüdür.\nIV. Liderlik için belirlenmiş bir organizasyon yapısı gerekirken yöneticilik için formal bir yapıya gerek yoktur.\nV. Yöneticinin organizasyonel yapıdan kaynaklanan gücü; durağanlığı, emir vermeyi ve problem çözümünü yaratır. Ancak liderin gücü vizyon, yaratıcılık ve organizasyonel değişim yaratmaktadır.\nVI. Yöneticinin sahip olduğu güç organizasyonel yapıdan kaynaklanır. Liderin sahip olduğu güç kişisel özelliklerinden kaynaklanır.\nYukarıdaki ifadelerden doğru olanlar hangileridir?",
    options: [
      "A) I-II-III-IV-V-VI",
      "B) I-II-V-VI",
      "C) I-III-IV-VI",
      "D) II-IV-V-VI",
      "E) II-III-V-VI",
    ],
    correctAnswer: "B) I-II-V-VI",
  },
  {
    id: 5,
    questionText:
      "5-) Aşağıdakilerden hangisi, liderlerden ziyade yöneticilerden beklenen özellikler arasında sayılabilir?",
    options: [
      "A) Kontrole dayalı ilişki",
      "B) Güvene dayalı ilişki",
      "C) Uzun vadeli bakış açısı",
      "D) İnsanlara ve geleceğe odaklanma",
      "E) Neden diye sorma ve mevcut duruma meydan okuma",
    ],
    correctAnswer: "A) Kontrole dayalı ilişki",
  },
  {
    id: 6,
    questionText:
      "6-) Aşağıdakilerden hangisi liderlik ile ilgili yanlış bir ifadedir?",
    options: [
      "A) Liderlik amaçlar doğrultusunda başkalarını etkileme ve harekete geçirme sürecidir.",
      "B) Lider izleyicileri etkileyebilmek için pozisyonundan ve kişisel özelliklerinden gelen güç kaynaklarını kullanmaktadır.",
      "C) Liderlik, liderin, izleyicilerin ve koşulların bir fonksiyonudur.",
      "D) Liderliğin ortaya çıkması için formal bir yapı ve meşru yetki zorunlu değildir.",
      "E) Liderlik sadece kavramsal beceriyle ilgilidir. İnsan ilişkileri ve teknik becerinin önemi yoktur.",
    ],
    correctAnswer:
      "E) Liderlik sadece kavramsal beceriyle ilgilidir. İnsan ilişkileri ve teknik becerinin önemi yoktur.",
  },
  {
    id: 7,
    questionText:
      "7-) Aşağıdaki güç kaynaklarından hangisi yanlış açıklanmıştır?",
    options: [
      "A) Meşru güç, pozisyon gereği alabileceğimiz kararları belirlemektedir.",
      "B) Uzmanlık gücü liderin derin bilgi ve tecrübesine dayanır.",
      "C) Referans olma gücüne sahip liderleri izleyiciler örnek alır, ona benzemek isterler.",
      "D) Karizmatik güç liderin kişisel çekiciliği ve uyandırdığı hayranlık duygusuna dayanmaktadır.",
      "E) Mantıksal ikna gücü liderin organizasyon içi ve dışında güçlü ve önemli kişilerle olan bağlantısına dayanmaktadır.",
    ],
    correctAnswer:
      "E) Mantıksal ikna gücü liderin organizasyon içi ve dışında güçlü ve önemli kişilerle olan bağlantısına dayanmaktadır.",
  },
  {
    id: 8,
    questionText:
      "8-) Liderin güç kaynaklarına ilişkin açıklamalardan hangisi yanlıştır?",
    options: [
      "A) Mantıksal ikna gücü liderin rasyonel argüman ve kanıtlarla izleyicileri ikna etmesine dayanmaktadır.",
      "B) Ödül gücü performans ve davranışları istenen düzeyde olmayan çalışanları cezalandırmaya dayanmaktadır.",
      "C) Politik güç liderin bürokratik kontrol ve politik manevralarla etki yaratması ve karşıt görüşleri zayıflatmasıdır.",
      "D) Dönüştürücü güç, liderin organizasyonun yönünü, kültürünü, iklimini değiştirme yeteneğidir.",
      "E) Bağlantı gücü liderin organizasyon içi ve dışında güçlü ve önemli kişilerle olan bağlantısına dayanmaktadır.",
    ],
    correctAnswer:
      "B) Ödül gücü performans ve davranışları istenen düzeyde olmayan çalışanları cezalandırmaya dayanmaktadır.",
  },
  {
    id: 9,
    questionText:
      "9-) Liderlik yaklaşımlarının gelişimiyle ilgili aşağıdakilerden hangisi doğrudur?",
    options: [
      "A) Liderlik yaklaşımlarının gelişimi toplumsal olaylardan bağımsız işletme yöneticilerinin tercihleri doğrultusunda olmuştur.",
      "B) Liderlik yaklaşımlarındaki gelişimin tek itici gücü liderin kişilik özellikleridir.",
      "C) 1990'lı yıllardan sonra işletmelerin faaliyette bulundukları çevrede kökten değişimler olması yeni bir tür liderliği zorunlu kılmıştır. Bu yıllardan sonra özellikle liderin vizyon geliştirme, değişimi yönetme, organizasyonları dönüştürme süreçlerinde nasıl etkili olabilecekleri ele alınmaktadır.",
      "D) Davranışsal liderlik yaklaşımlarında sadece liderin görev odaklı ve insan odaklı davranışları ele alınmıştır, bu davranışlardan sadece görev odaklının etkin olduğu vurgulanmıştır.",
      "E) Yönetim alanında sistem yaklaşımının etkileri ile birlikte etkin lider davranışlarında rol oynayan çevresel faktörler göz ardı edilmiştir.",
    ],
    correctAnswer:
      "C) 1990'lı yıllardan sonra işletmelerin faaliyette bulundukları çevrede kökten değişimler olması yeni bir tür liderliği zorunlu kılmıştır. Bu yıllardan sonra özellikle liderin vizyon geliştirme, değişimi yönetme, organizasyonları dönüştürme süreçlerinde nasıl etkili olabilecekleri ele alınmaktadır.",
  },
  {
    id: 10,
    questionText:
      "10-) Güç kaynaklarına ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Liderlerin temel fonksiyonu izleyicilerini etkileyerek istenen sonuçlara ve beklentilere ulaşmalarını sağlamaktır ve bu güç kullanımı gerektirmektedir.",
      "B) Hem yöneticiler hem de liderler için güce ulaşmak ve kullanmak önemlidir.",
      "C) Liderler çoğu kez gücü elinde bulunduran üstün insanlar, süper kahramanlar olarak sıradan insanlardan farklı görülmektedirler. Çoğunlukla bireysel güç kaynaklarıyla insanları etkilemektedirler.",
      "D) İzleyicilerin davranışlarını olumlu yönde etkileme sürecinde yararlanılan meşru ve kişisel dayanakları olan pek çok güç kaynağı bulunmaktadır.",
      "E) Güç kaynaklarının hepsi pozisyona dayalıdır.",
    ],
    correctAnswer: "E) Güç kaynaklarının hepsi pozisyona dayalıdır.",
  },
  {
    id: 11,
    questionText:
      "11-) Liderlik teorilerinin gelişimine ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Liderlik kavramı insanlık tarihi kadar eskidir.",
      "B) Toplumsal değişim sürecinin bir yansıması olarak etkin liderlik tarzları da değişmekte, bu liderlik tarzlarını açıklayan teoriler de gelişim göstermektedir.",
      "C) Liderlik üzerine yapılan ilk çalışmalar 1940'lı yıllarda işletme yönetiminde başarılı olan yöneticilerin kişisel özelliklerini tespit etmek ve evrensel bir lider profili çıkarmak üzere yapılan çalışmaları kapsamaktadır.",
      "D) 1950'li yıllarda liderin tavır ve davranışlarının nasıl olması gerektiğine dair çalışmalara ağırlık verilmiştir.",
      "E) 1990'lı yıllarda özellikle bilgi ve iletişim teknolojilerindeki gelişmelerle işletmelerin faaliyette bulundukları çevrede değişimler olması eski liderlik yaklaşımlarını kullanmayı gerekli kılmıştır.",
    ],
    correctAnswer:
      "E) 1990'lı yıllarda özellikle bilgi ve iletişim teknolojilerindeki gelişmelerle işletmelerin faaliyette bulundukları çevrede değişimler olması eski liderlik yaklaşımlarını kullanmayı gerekli kılmıştır.",
  },
  {
    id: 12,
    questionText:
      "12-) Ohio State Üniversitesi çalışmasına göre aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Liderin davranışları işe ve kişiye yönelik olmak üzere iki boyutta ele alınmaktadır.",
      "B) Kişiyi dikkate alan liderler izleyicilerin fikirlerini ve duygularını önemsememektedir.",
      "C) Kişiyi dikkate alan liderler dostça tavır, açık iletişim, takım çalışması aracılığıyla izleyicileri için bir güven ortamı hazırlamakta ve onları güçlendirmektedirler.",
      "D) İşe dönük liderler amaçları gerçekleştirmek için işleri planlamakta, örgütlemekte ve çalışanı görev odaklı bir şekilde yönlendirmektedir.",
      "E) İşe dönük liderler işin nasıl, ne zaman yapılması gerektiğine ilişkin kararları çalışanlara bırakmakta, çalışanın bu kararları etkili şekilde alabileceği dostluk ve güven ortamı inşa etmektedir.",
    ],
    correctAnswer:
      "E) İşe dönük liderler işin nasıl, ne zaman yapılması gerektiğine ilişkin kararları çalışanlara bırakmakta, çalışanın bu kararları etkili şekilde alabileceği dostluk ve güven ortamı inşa etmektedir.",
  },
  {
    id: 13,
    questionText: "13-) Aşağıdakilerden hangisi X teorisi varsayımıdır?",
    options: [
      "A) Çalışmak oyun, dinlenme kadar doğaldır.",
      "B) İnsanlar tipik olarak tembeldir, çalışmak istemezler.",
      "C) İnsan tipik olarak tembel değildir, gerekli ortam ve uygun iş verildiğinde çalışmak oyun oynamak kadar zevklidir.",
      "D) Kişinin çalışmak istememesinde geçmiş kötü tecrübelerinin rolü vardır.",
      "E) Uygun koşullar olduğunda çalışanlar sorumluluk almak istemektedir.",
    ],
    correctAnswer: "B) İnsanlar tipik olarak tembeldir, çalışmak istemezler.",
  },
  {
    id: 14,
    questionText:
      "14-) Kurt Lewin'in liderlik sınıflandırmasına göre aşağıdakilerden hangisi söylenemez?",
    options: [
      "A) Otokratik liderlikte tüm yetki liderde toplanmaktadır.",
      "B) Lewin'in araştırması esnasında otokratik rol üstlenen liderlerde grup üyelerinin iki tür tepki gösterdiği ortaya konmuştur: bunlardan biri saldırgan ve düşmanca tavır, diğeri uyumlu tavırdır.",
      "C) Demokratik (katılımcı) liderlikte yetki izleyicilerle paylaşılarak amaçlara ve iş dağılımına beraber karar verilmektedir.",
      "D) Lewin'in araştırması esnasında katılımcı liderlik ikliminde, liderin yokluğunda da grup üyelerinin çalışmaya devam ettiği gözlemlenmiştir.",
      "E) Özgür bırakıcı (Laissez-Faire) tarzda lider emirler vererek ve sıkı kontrollerde bulunarak izleyicileri yönlendirmektedir.",
    ],
    correctAnswer:
      "E) Özgür bırakıcı (Laissez-Faire) tarzda lider emirler vererek ve sıkı kontrollerde bulunarak izleyicileri yönlendirmektedir.",
  },
  {
    id: 15,
    questionText:
      "15-) Aşağıdakilerden hangisi özellikler teorisine yöneltilen eleştiriler arasında sayılamaz?",
    options: [
      "A) Yalnızca liderlerin kişilik özelliklerini ele alarak liderliği etkileyen diğer faktörleri gözardı etmesi",
      "B) İnsanları nitelendirebilecek sınırsız özelliğin var olması nedeniyle lider özelliklerini sınıflandırma güçlüğü",
      "C) Klasik yönetim düşüncesiyle uyumlu bir şekilde her ortam ve koşulda geçerli lider özelliklerini sorgulaması",
      "D) Liderlik fonksiyonunda belirtilen ve etkin bir liderlik için gerekli 'izleyiciler' ve 'koşullar' gibi tüm değişkenleri dikkate alması",
      "E) Birbirinden farklı çalışmaların farklı lider özellikleri ortaya koyması, etkili lideri tanımlayabilecek tüm özellikleri belirlemenin güçlüğü",
    ],
    correctAnswer:
      "D) Liderlik fonksiyonunda belirtilen ve etkin bir liderlik için gerekli 'izleyiciler' ve 'koşullar' gibi tüm değişkenleri dikkate alması",
  },
  {
    id: 16,
    questionText:
      "16-) Rensis Likert'in Sistem 1 – Sistem 4 Yaklaşımına göre aşağıdakilerden hangisi doğrudur?",
    options: [
      "A) İstismarcı otokratik yönetim tarzında lider çalışanlara biraz yakın olmaya çalışır, ara sıra fikirlerini sorar.",
      "B) Katılımcı yönetim tarzında lider genellikle kendi fikrini kullanır.",
      "C) Yardımsever yönetim tarzında lider çalışanların fikirlerini ve beklentilerini sorar, onlarla beraber karar alır.",
      "D) Demokratik yönetim tarzında lider astlarına tam olarak güvenir, fikirlerine her zaman danışır.",
      "E) Likert'e göre verimliliğin yüksek olduğu gruplarda sistem-1 istismarcı otokratik liderlik tarzıdır.",
    ],
    correctAnswer:
      "D) Demokratik yönetim tarzında lider astlarına tam olarak güvenir, fikirlerine her zaman danışır.",
  },
  {
    id: 17,
    questionText:
      "17-) Yönetim Tarzı Matrisi'ne ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Cılız liderlik ne işin yerine getirilmesi için ne de çalışanların arzu ve ihtiyaçlarını tatmin etmek için çaba göstermez.",
      "B) Cılız liderlikte hem üretim düzeyi hem çalışan tatmini düşüktür.",
      "C) Kulüp liderliğinde çalışanların tatminine ve arkadaşça bir ortam yaratmaya odak ve düşük iş ilgisi vardır.",
      "D) Görev liderliğinde üretim hedeflerine önem verilmekte, çalışanların istek ve ihtiyaçları göz ardı edilmektedir.",
      "E) En etkili liderlik tarzı orta yol liderliktir.",
    ],
    correctAnswer: "E) En etkili liderlik tarzı orta yol liderliktir.",
  },
  {
    id: 18,
    questionText:
      "18-) Yönetim Tarzı Matrisi'ne ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Takım liderliğinde üretkenlik ve çalışan tatmini en üst düzeydedir.",
      "B) Fırsatçı lider merhametli bir davranış içindeki 'müşfik diktatör' gibidir.",
      "C) Orta yol liderliğinde üretimde mevcut potansiyeli tamamen kullanmaktan ziyade, herkesi memnun edecek bir orta yolun bulunması amaçlanmaktadır.",
      "D) Paternalist ve maternalist lider çalışanlara bir anne baba gibi ilgi ile davranır.",
      "E) Paternalist ve maternalist liderler örgütü bir aile gibi görür, önemli kararları kendileri verir, bunlara uyum ve itaat ister, uyumsuzluğu cezalandırır, sadakat ve itaati ödüllendirir.",
    ],
    correctAnswer:
      "B) Fırsatçı lider merhametli bir davranış içindeki 'müşfik diktatör' gibidir.",
  },
  {
    id: 19,
    questionText:
      "19-) Fırsatçı lidere ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Kişisel çıkarını sağlayabilmek için yönetim tarzı matrisinde sıralanan beş temel tarzın herhangi birini kullanan liderdir.",
      "B) Üretimde mevcut potansiyeli tamamen kullanmaktan ziyade, herkesi memnun edecek bir orta yolun bulunması amaçlanmaktadır.",
      "C) Liderin önceliği kişisel faydasını artırmaktır.",
      "D) Kişisel faydasını sağlamak için en etkin olacak davranış şeklini içeren tarza bürünmektedir.",
      "E) Bu liderleri 'kurnaz' olarak nitelendiren ya da kimileri 'uyumlu' olarak nitelendiren düşünürler bulunmaktadır.",
    ],
    correctAnswer:
      "B) Üretimde mevcut potansiyeli tamamen kullanmaktan ziyade, herkesi memnun edecek bir orta yolun bulunması amaçlanmaktadır.",
  },
  {
    id: 20,
    questionText:
      "20-) Fiedler'in Durumsal Liderlik Yaklaşımına göre aşağıdakilerden hangisi yanlıştır?",
    options: [
      "A) Yaklaşım üç durumsal değişken ile liderin çalışma ortamını etkileme ve kontrol etme gücünü (durumsal kontrolü) belirlemeye ve buna uygun davranışı göstermeye dayalıdır.",
      "B) Durumsal kontrol değişkenleri şunlardır: lider-çalışan ilişkisi, işin niteliği, pozisyon gücü.",
      "C) Pozisyon gücü yöneticinin sahip olduğu kişisel güç kaynaklarıdır.",
      "D) Önceden iyi tanımlanmış, rutin işler yüksek nitelikli; yaratıcı, önceden tanımlanması güç, belirsizliğin yüksek olduğu işler ise düşük niteliklidir.",
      "E) Lider-çalışan ilişkisi, yöneticiye duyulan güven ve kabul ile ilişkilidir.",
    ],
    correctAnswer:
      "C) Pozisyon gücü yöneticinin sahip olduğu kişisel güç kaynaklarıdır.",
  },
  {
    id: 21,
    questionText:
      "21-) Fiedler'in Durumsal Liderlik Yaklaşımına göre aşağıdakilerden hangisi yanlıştır?",
    options: [
      "A) Durumsal koşullar liderin durumsal kontrolü üzerinde etkili değildir.",
      "B) Durumsal kontrol, liderin çalışma ortamını etkileme ve kontrol etme gücü olarak tanımlanabilir.",
      "C) Durumsal kontrol yüksek ise lider işin sonuçlarını etkileyebilir, düşük ise liderin iş çıktısına etkisi zayıftır.",
      "D) Lider için her bir durumsal değişkenin farklı niteliklerde bir arada bulunmasına göre düşük, orta ve yüksek seviye durumsal kontrol söz konusudur.",
      "E) Düşük ve yüksek kontrol durumlarında işe yönelik, orta kontrol durumunda kişiye yönelik bir liderlik tarzı etkili olmaktadır.",
    ],
    correctAnswer:
      "A) Durumsal koşullar liderin durumsal kontrolü üzerinde etkili değildir.",
  },
  {
    id: 22,
    questionText:
      "22-) Durumsal liderlik yaklaşımına göre aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Yönlendirici liderliğe göre işi yapamayacak durumda, isteksiz ve kendine güvensiz durumdaki çalışanlar için lider belirli görevleri açıkça vermelidir.",
      "B) Yönlendirici liderlik tarzı için işbirlikçi, kolaylaştırıcı, taahhüt edici isimleri de kullanılmaktadır.",
      "C) İkna edici liderin sadece yapılacak işi söylemesi yeterli olmayacak; yapılması gerekeni açıklaması, bir fikir olarak çalışana psikolojik olarak satması etkili olacaktır.",
      "D) Katılımcı liderin en etkin davranışı ilişki yönelimli, ikili iletişim kuran destekleyici davranışlardır. Neyin, nerede, nasıl yapılacağına ilişkin yönlendirme düşük olmalıdır.",
      "E) Güçlendirici liderlikte çalışana neyi, nasıl, nerede, neden yapması gerektiğini söylemek gereksiz olacak; zaten istekli ve özgüvenli olan çalışanı cesaretlendirmek de gereksiz olacaktır. En uygun davranış işleri çalışana bırakmaktır.",
    ],
    correctAnswer:
      "B) Yönlendirici liderlik tarzı için işbirlikçi, kolaylaştırıcı, taahhüt edici isimleri de kullanılmaktadır.",
  },
  {
    id: 23,
    questionText:
      "23-) Aşağıdaki liderlik türünden hangisi Amaç Yol Yaklaşımının ortaya koyduğu sınıflandırmada bulunmaz?",
    options: [
      "A) Otoriter",
      "B) Destekleyici",
      "C) Katılımcı",
      "D) Başarı odaklı",
      "E) İstismarcı",
    ],
    correctAnswer: "E) İstismarcı",
  },
  {
    id: 24,
    questionText:
      "24-) Amaç yol yaklaşımına ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Motivasyon teorilerinden bekleyişler yaklaşımı ile liderlik teorilerini birleştiren bir bakış açısı sunmaktadır.",
      "B) Çalışanların işi yapmak için kendilerini yeterli gördüklerinde ve işi tamamlayarak ulaşacakları ödülü arzuladıklarında motive olacakları ve kendi istekleriyle çaba gösterecekleri varsayımına dayanmaktadır.",
      "C) Liderin rolü çalışanları motive edecek ihtiyaçları karşılamaktır.",
      "D) Liderin durumsal kontrolü nasıl davranması gerektiğini belirlemektedir.",
      "E) Çalışan ihtiyaçları gerekli bilgiyi sağlamak, ödüller vermek, amaçları tanımlamak, engelleri kaldırmak, destek sağlamak vb. olabilir. Amaç yol yaklaşımına göre lider çalışanları amaçları gerçekleştirecekleri yolu açıklamakta, yol boyunca onlara eşlik etmektedir.",
    ],
    correctAnswer:
      "D) Liderin durumsal kontrolü nasıl davranması gerektiğini belirlemektedir.",
  },
  {
    id: 25,
    questionText:
      "25-) Lider üye etkileşimine ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Lider Üye Etkileşimi teorisi lider ve izleyiciler arasında, karşılıklı olarak gelişen ilişkilere dayanmaktadır.",
      "B) Teorinin önceki yaklaşımlardan en temel farkı, lider ve/veya izleyicilerin özellikleri veya davranışlarına değil, aralarındaki gelişen ilişkinin kalitesine odaklanmasıdır.",
      "C) LMX, liderlerin tüm çalışanlara belirli bir tarz ile yaklaşmadığı, bunun yerine her bir çalışanla birebir ve özgün bir ilişki geliştirdikleri varsayımına dayanmaktadır.",
      'D) Davranış bilimciler LMX teorisinin ele aldığı davranışa "dikey ikili" adını vermektedirler.',
      "E) Dikey ikili çalışanın herhangi bir görevi reddetmesiyle başlamaktadır.",
    ],
    correctAnswer:
      "E) Dikey ikili çalışanın herhangi bir görevi reddetmesiyle başlamaktadır.",
  },
  {
    id: 26,
    questionText:
      "26-) Dikey ikilinin gelişme sürecinde aşağıdaki aşamalardan hangisi bulunamaz?",
    options: [
      "A) Liderle üyenin ilk etkileşimi",
      "B) Üyenin ailesiyle olan davranışları",
      "C) Lider tarafından üyeye görevler verilmesi",
      "D) Üyenin bu görevler karşısındaki tutum ve davranışları",
      "E) Liderin üye davranışına yönelik tutum ve davranışları",
    ],
    correctAnswer: "B) Üyenin ailesiyle olan davranışları",
  },
  {
    id: 27,
    questionText:
      "27-) Lider üye etkileşiminin kalitesine (niteliğine) ilişkin aşağıdaki ifadelerden hangisi doğrudur?",
    options: [
      "A) LMX sürecinin ilk girdisi lider üye arasındaki etkileşimin niteliğidir.",
      "B) Etkileşimin niteliği grup içi, grup dışı ve gruplar arası olmak üzere üç türlü olabilmektedir.",
      "C) Grup içi etkileşim liderle izleyici arasında karşılıklı güven, saygı ve hoşlanmanın eksik olduğu etkileşimdir.",
      "D) Grup dışı etkileşimde sadece görev odaklı bir ortaklık geliştirilebilmektedir; grup içi etkileşimde ise liderin desteği, formal ve informal ödülleri çalışan için artırması söz konusudur.",
      "E) Düşük kaliteli etkileşimde lider ve izleyiciler karşılıklı etki, güven, saygı ve hoşlanma özelliklerini taşıyan bir ortaklık geliştirmektedirler.",
    ],
    correctAnswer:
      "D) Grup dışı etkileşimde sadece görev odaklı bir ortaklık geliştirilebilmektedir; grup içi etkileşimde ise liderin desteği, formal ve informal ödülleri çalışan için artırması söz konusudur.",
  },
  {
    id: 28,
    questionText:
      "28-) Lider üye etkileşiminin boyutlarına ilişkin tanımlamalardan hangisi yanlıştır?",
    options: [
      "A) Etki: Karşılıklı hoşlanma",
      "B) İlgi: Birbirinin beklediği doğrultuda davranma ve ilgilenme",
      "C) Katkı: Görev odaklı ilişkiler geliştirmede başarılı olma",
      "D) Sadakat: Birbirinin beklediği doğrultuda davranma, birbirini destekleme, vefakârlık",
      "E) Profesyonel Saygı: İşini nasıl yaptığına ilişkin itibarı",
    ],
    correctAnswer:
      "B) İlgi: Birbirinin beklediği doğrultuda davranma ve ilgilenme",
  },
  {
    id: 29,
    questionText:
      "29-) Profesyonel saygı boyutuna ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Lider ve çalışanın birbirlerinin örgüt içi ya da dışında mesleki itibarlarını algılamalarıdır.",
      "B) Profesyonel saygıya ilişkin algılama yöneticinin geçmişine dayalıdır.",
      "C) Bir kişiyle henüz bir arada çalışmadan, hatta onunla karşılaşmadan, profesyonel saygı konusunda bir algı geliştirilmesi mümkün değildir.",
      "D) Yöneticinin birlikte çalıştığı ve karşılaştığı diğer bireylerle yaşadığı deneyimler, başkalarının organizasyon içinde ve dışında onun hakkındaki yorumları, sahip olduğu ödüller veya diğer profesyonel takdirler yoluyla profesyonel saygıya ilişkin algı oluşabilmektedir.",
      "E) Bu boyut güven ve yüksek saygı ile yakından ilişkilidir.",
    ],
    correctAnswer:
      "C) Bir kişiyle henüz bir arada çalışmadan, hatta onunla karşılaşmadan, profesyonel saygı konusunda bir algı geliştirilmesi mümkün değildir.",
  },
  {
    id: 30,
    questionText:
      "30-) Aşağıdakilerden hangisi örgütsel değişimin aşamaları arasında yer almaz?",
    options: [
      "A) Değişim ihtiyacını belirleme",
      "B) Değişim ekiplerini dağıtma",
      "C) Vizyon ve değerler yaratma",
      "D) İletişim kurma ve dahil olma",
      "E) Güçlendirme",
    ],
    correctAnswer: "B) Değişim ekiplerini dağıtma",
  },
  {
    id: 31,
    questionText: "31-) Aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Rutin bir teknik sorunu çözmek için gereken liderlik türü ile karmaşık örgütsel değişikliği sağlamak için gereken liderlik türü birbirinin aynısıdır.",
      "B) Değişim liderleri; çevredeki, insanlardaki ve kültürdeki değişiklikleri veya önemli süreçlerdeki değişiklikleri ele alarak, karmaşıklıkla başa çıkmalı ve uyum sağlamalıdır.",
      "C) Değişim liderleri insanlar için sorunları çözmek değil, onları sorunlardan sorumlu tutmaya, işin sahibi kılmaya yönelmektedirler.",
      "D) Etkili bir değişim süreci için yolunda gitmeyen işler ve zorluklardan izleyicileri korumak değil, liderle beraber yolunda gitmeyen şeylerin sıkıntısını anlamalarına izin vermek gerekmektedir.",
    ],
    correctAnswer:
      "A) Rutin bir teknik sorunu çözmek için gereken liderlik türü ile karmaşık örgütsel değişikliği sağlamak için gereken liderlik türü birbirinin aynısıdır.",
  },
  {
    id: 32,
    questionText:
      "32-) Değişim sürecinin vizyon ve değer yaratma aşamasında liderin rolü aşağıdakilerden hangisi olamaz?",
    options: [
      "A) Fikirleri başlatmak",
      "B) Beyin fırtınası yapmak",
      "C) Farklı ve yaratıcı düşünmeyi teşvik etmek",
      "D) İkna etmek ve zorlamak",
      "E) Geleceği öngörmek",
    ],
    correctAnswer: "B) Beyin fırtınası yapmak",
  },
  {
    id: 33,
    questionText:
      "33-) Değişim sürecinin güçlendirme aşamasında liderin rolü aşağıdakilerden hangisi olamaz?",
    options: [
      "A) Etkilemek",
      "B) Anlamak",
      "C) Araştırmak",
      "D) Dinlemek",
      "E) İzlemek ve kontrol etmek",
    ],
    correctAnswer: "E) İzlemek ve kontrol etmek",
  },
  {
    id: 34,
    questionText:
      "34-) Değişim sürecinin güçlendirme aşamasında liderin rolü aşağıdakilerden hangisi olamaz?",
    options: [
      "A) Açık ve net hedef belirleme",
      "B) İyi derecede yetki devri",
      "C) Gündemleri belirlemek ve emir vermek",
      "D) Detaylarla ilgili direktifler vermeden serbestçe yönetmek",
      "E) Koçluk yapmak",
    ],
    correctAnswer: "C) Gündemleri belirlemek ve emir vermek",
  },
  {
    id: 35,
    questionText:
      "35-) Yönetsel etikle ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Yöneticilerin gündelik pek çok karar verme sürecinde etkisi altında kaldığı pek çok faktör bulunmakta; bu süreçte adalet, dürüstlük, ortak iyilik, açıklık gibi değerler konusunda tutarlılık içinde olmaları gerekmektedir.",
      "B) Yöneticiler kararları alırken belirli ilkelere dayanmaları gerekmektedir.",
      "C) Etik, yönetsel kararlarda ülke yasaları, toplumsal ve kültürel değerler, yöneticinin özgür seçim alanı arasında tutarlı kuralların (ilkelerin) oluşturduğu bir bütündür.",
      "D) Her kararda olduğu gibi yönetsel kararlarda da, yöneticiden beklenen etik davranış sergilemesi, tutarlı kurallar bütünü içinde karar vermesidir.",
      "E) Yönetici bir kararında adil, dürüst, açık davranırken diğerinde farklı davranabilir.",
    ],
    correctAnswer:
      "E) Yönetici bir kararında adil, dürüst, açık davranırken diğerinde farklı davranabilir.",
  },
  {
    id: 36,
    questionText:
      "36-) Etik ve ahlak kavramlarıyla ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Etik, iyiyle kötüyü, doğruyla yanlışı ayırt etmemizi sağlayan ahlaki ilkelerin bütünü olarak görülebilir.",
      "B) Ahlak, insanın yaşadığı toplum içinde kabul gören tutum ve davranışlar bütünüdür.",
      "C) Etik, insanların nasıl davranması gerektiğine odaklanan daha evrensel bir kavram; ahlak ise belirli bir toplum veya alt kültür için doğru olan davranışlara odaklanan bir kavramdır.",
      "D) Ahlak, her toplum için aynı evrensel kuralları olan bir kavramdır.",
      "E) Ahlak, farklı kültürler ve toplumlar arasında değişiklik gösteren daha subjektif bir kavramdır.",
    ],
    correctAnswer:
      "D) Ahlak, her toplum için aynı evrensel kuralları olan bir kavramdır.",
  },
  {
    id: 37,
    questionText:
      "37-) Aşağıdakilerden hangisi yöneticinin bir birey olarak etik davranışını etkileyen faktörler arasında yer alamaz?",
    options: [
      "A) Bireyin ahlaki gelişim düzeyi",
      "B) Bireyin yaşı, eğitimi, geçmiş deneyimleri, ailesi, sosyal ekonomik durumu",
      "C) Bireyin kişisel çıkarları",
      "D) Toplum kültürü ve değerler",
      "E) Norm ve görgü kuralları",
    ],
    correctAnswer: "C) Bireyin kişisel çıkarları",
  },
  {
    id: 38,
    questionText: "38-) Aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Liderin etik davranış, norm ve standartları sayesinde çalışanlar açıkça neyin doğru veya yanlış olduğunu görebilmektedir.",
      "B) Liderler çalışanlar için etik karar alma ve problem çözmedeki hareket tarzlarını belirleyen etik değerleri ortaya koymaktadırlar.",
      "C) Etik değerler; liderin kişilerarası ilişkilerini, örgütsel amaç ve üst yönetimin baskılarını kabul etme şeklini ve performansını da etkilemektedir.",
      "D) Liderin sahip olduğu değerlere ve etik davranışa yönelik odağın yönetim literatüründe artmasıyla, dönüşümcü ve karizmatik liderlik alanlarındaki akademik çalışmalar eleştirilmeye başlanmış, hizmetkâr liderlik ve etik liderlik teorileriyle etik davranışa vurgu yapılmıştır.",
      "E) Otokratik liderlik; eylem ve ilişkilerde normatif uygunluğa dayanan; izleyicileri iki yönlü iletişim kurma ve ahlaki düşünce biçimine sahip olmada teşvik eden bir liderlik tarzıdır. Etik lider dürüst, güvenilir, adil davranışlar sergileyerek, izleyicilerin güvendiği bir rol model olmaktadır.",
    ],
    correctAnswer:
      "E) Otokratik liderlik; eylem ve ilişkilerde normatif uygunluğa dayanan; izleyicileri iki yönlü iletişim kurma ve ahlaki düşünce biçimine sahip olmada teşvik eden bir liderlik tarzıdır. Etik lider dürüst, güvenilir, adil davranışlar sergileyerek, izleyicilerin güvendiği bir rol model olmaktadır.",
  },
  {
    id: 39,
    questionText:
      "39-) Etik liderliğin boyutlarıyla ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Etik ve adalet boyutu liderin dürüst, güvenilir, ilkeli, adaletli seçimler yapan ve çalışanlara karşı ilgili gösteren davranışlarına vurgu yapmaktadır.",
      "B) Görevlerin açıklığa kavuşturulması boyutu liderin açık iletişim kurma, çalışanlardan beklenen görev ve sorumlulukları açıklığa kavuşturma davranışlarına vurgu yapmaktadır.",
      "C) Güç paylaşımı boyutu liderin yetkiyi elinde toplayan ve pozisyon gücüne dayalı olarak çalışanları etkilemeye çalıştığı bir organizasyonu ifade etmektedir.",
      "D) Rollerin açıklığa kavuşturulması boyutu liderin etik davranışı ödüllendirerek çalışanları teşvik etme gibi davranışlarını içermektedir.",
      "E) Güç paylaşımı boyutu liderin çalışanlara fikirlerini sorması, kararlara katılımı desteklemesi, yetki ve gücü paylaşması konularını kapsamaktadır.",
    ],
    correctAnswer:
      "C) Güç paylaşımı boyutu liderin yetkiyi elinde toplayan ve pozisyon gücüne dayalı olarak çalışanları etkilemeye çalıştığı bir organizasyonu ifade etmektedir.",
  },
  {
    id: 40,
    questionText: "40-) Aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Kültür; bir toplumun, sosyal olarak iletilmiş davranış biçimlerinin, inançlarının, kurumlarının ve tüm diğer insanlar tarafından yaratılmış ürünlerinin ve düşünülen özelliklerinin toplamı olarak tanımlanmaktadır.",
      "B) Toplum kültürleri doğrudan örgüt kültürünün belirleyicisi olmasa da üzerinde ciddi etkisi olan önemli bir değişkendir. Bu nedenle toplum kültürleri arasında yapılan çeşitli sınıflandırmalarla, kullanılan yönetim yaklaşımları ve liderlik tarzları açıklanmaya çalışılmaktadır.",
      "C) Kültür; çeşitli boyutlarla ele alınması ve ölçülmesi mümkün olmayan bir kavramdır, bu nedenle literatürde bu kültürlere ilişkin sınıflandırmalar ve kültürel boyutlara ilişkin bir boşluk vardır.",
      "D) Hofstede toplumların değer, inanç ve paylaşılan deneyimlerine dayalı kendilerine özgü bir kültürlerinin olduğunu ileri sürmekte ve farklı ülkelerdeki IBM şirketlerinde çalışanların algılarını ölçerek kültürü beş boyut altında değerlendirmektedir.",
      "E) Hofstede'nin yöntemi pek çok açıdan eleştirilse de kültürle ilgili çalışmalarda halen yaygın olarak kullanılmaktadır.",
    ],
    correctAnswer:
      "C) Kültür; çeşitli boyutlarla ele alınması ve ölçülmesi mümkün olmayan bir kavramdır, bu nedenle literatürde bu kültürlere ilişkin sınıflandırmalar ve kültürel boyutlara ilişkin bir boşluk vardır.",
  },
  {
    id: 41,
    questionText:
      "41-) Güç mesafesine ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Bir toplumun eşitsiz güç dağılımını, otorite ile mesafeyi kabul etme derecesidir.",
      "B) Yüksek güç mesafesi olan bir toplumda otorite daha fazla kabul edilmekte; düşük güç mesafesi olan bir toplumda ise gücün sadece belirli gruplarda toplanması kötü bir şey, zorlama, yolsuzluğa ortam hazırlanması olarak görülür.",
      "C) Organizasyonlarda güç, yöneticilerin uyguladığı merkezileşme ve kontrol derecesiyle ilişkilidir.",
      "D) Yüksek güç mesafesi olan toplumlardaki şirketlerde, iktidar konumundaki kişilerle (yöneticilerle) çalışanlar arasında formal bir ilişki ve itaate dayalı bir saygı söz konusudur.",
      "E) Güç mesafesi yüksek örgüt kültürlerinde çalışanlar yöneticileri rahatlıkla sorgulamakta ve karşı gelebilmektedirler.",
    ],
    correctAnswer:
      "E) Güç mesafesi yüksek örgüt kültürlerinde çalışanlar yöneticileri rahatlıkla sorgulamakta ve karşı gelebilmektedirler.",
  },
  {
    id: 42,
    questionText:
      "42-) Aşağıdakilerden hangisi Hofstede'nin kültür boyutları arasında yoktur?",
    options: [
      "A) düşük-yüksek güç mesafesi",
      "B) klan kültürü",
      "C) belirsizlikten kaçınma-kaçınmama",
      "D) erillik-dişillik",
      "E) bireycilik-kolektivizm",
    ],
    correctAnswer: "B) klan kültürü",
  },
  {
    id: 43,
    questionText:
      "43-) GLOBE çalışmasının kendine güven boyutuna ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Bireylerin başkalarıyla olan ilişkilerinde kendine güvenli, rekabetçi, iddialı, çatışmacı, agresif olma eğilimleridir.",
      "B) Düşük kendine güven olan toplumlarda baskın ve zorlayıcı davranışlara değer verilmektedir.",
      "C) Bireyler yüksek kendine güven olan toplumlarda görüş ve düşüncelerini açıkça ifade etmeye çekinmektedirler.",
      "D) Yüksek kendine güven olan toplumlarda işbirliğine değer verilmekte ve dolayısıyla iletişimde daha dolaylı, kafa tutmayan bir tarz tercih edilmektedir.",
      "E) Yöneticiler için yüksek kendine güvenin olduğu bir organizasyonun anlamı; rekabetçi, herkesin görüşlerini söylemeye istekli olduğu, çatışmanın kaçınılmaz olduğu, ilişkilerden çok sonuçların değerli görüldüğü bir ortamda çalışanları yönlendirmesi gerektiğidir.",
    ],
    correctAnswer:
      "C) Bireyler yüksek kendine güven olan toplumlarda görüş ve düşüncelerini açıkça ifade etmeye çekinmektedirler.",
  },
  {
    id: 44,
    questionText:
      "44-) Performans odaklılığın yüksek olduğu bir işletmeye ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Yüksek performans odaklı toplumlardaki işletmelerin yöneticileri, çalışanlarını maddi ödüller ve para ile motive etmekte, bunun için de açık hedefler koymaktadırlar.",
      "B) Yüksek performans odaklı işletmeler açıkça bir performans değerleme kriteri belirlemektedir.",
      "C) Çalışanlar, performanslarını iyileştirmek için yöneticilerden eğitim ve gelişme fırsatları sunmasını isteyebilmektedir.",
      "D) Çalışanların istenen performansı ortaya koymalarına yardımcı olmak için yöneticilerin geribildirim vermesi beklenmektedir.",
      "E) Yöneticiler para kazanmaya dayalı hedefleri olan çalışanları motive etmekte güçlük çekebilmektedirler.",
    ],
    correctAnswer:
      "E) Yöneticiler para kazanmaya dayalı hedefleri olan çalışanları motive etmekte güçlük çekebilmektedirler.",
  },
  {
    id: 45,
    questionText:
      "45-) İnsan odaklılığın düşük olduğu bir toplum ve organizasyona ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Toplumda bireysel çıkar, güç ve mülkiyet sahipliği değer görmektedir.",
      "B) Toplum üyeleri başkalarının refahı için bireysel düzeyde sorumluluk ve ayrımcılığa yönelik hassasiyet duymamakta, bunları devlet ve kurumlardan beklemektedir.",
      "C) Organizasyonda yöneticiler; formal iletişim, bürokrasiye dayalı kontrolün olduğu ve otonom çalışmanın hoş karşılanmadığı bir ortam oluşturmaktadırlar.",
      "D) Organizasyonlarda olumlu iş tutumları gözlemlenmektedir.",
      "E) Organizasyonlarda işten kaytarma ve tatminsizlik gibi olumsuz iş tutumları gözlemlenmektedir.",
    ],
    correctAnswer:
      "D) Organizasyonlarda olumlu iş tutumları gözlemlenmektedir.",
  },
  {
    id: 46,
    questionText:
      "46-) İnsan odaklılıkla ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) İnsan odaklı liderliğin önemi özellikle otokratik ya da hiyerarşi temelli liderlik tarzlarıyla kıyaslandığında anlaşılabilmektedir.",
      "B) Aşırı otokratik, emir verici ve kontrol odaklı davranışlar gösteren liderlerin çalışanların saygı ve güvenini kazanamaması olasıdır; insan odaklı liderlik bu davranışların tam tersinde bulunmaktadır.",
      "C) İnsan odaklı lider yaklaşımları, geleneksel otokratik liderlik yaklaşımlarının bugünün çalışanlarını motive etmekte yetersiz olduğu konuları da dikkate almaktadır.",
      "D) Kriz ortamındaki zor koşullarda, hızla kararlar verilmesi gerektiğinde insan odaklı liderler de otokratik liderler gibi tüm yetkiyi ele alabilmekte ve kesin kararlar verebilmektedirler.",
      "E) İnsan odaklı liderler zor koşullarda da mutlaka yetki devretme, kararın sorumluluğunu almama eğiliminde olabilmektedirler.",
    ],
    correctAnswer:
      "E) İnsan odaklı liderler zor koşullarda da mutlaka yetki devretme, kararın sorumluluğunu almama eğiliminde olabilmektedirler.",
  },
  {
    id: 47,
    questionText:
      "47-) Laub'un örgüt sağlığının aşamaları yaklaşımına göre aşağıdaki ifadelerden hangisi doğru olamaz?",
    options: [
      "A) Zehirli örgüt sağlığında çalışanlar kendilerini tehlikede görmekte, iş yapmak için zorlanmakta ve korkutulmaktadırlar.",
      "B) Zayıf örgüt sağlığında düşük derecede güven, yüksek derecede belirsizlik ve korku vardır.",
      "C) Kısıtlı örgüt sağlığında çalışanların tümünün birbirlerinin ihtiyaçlarına hizmet etmek için motive edildikleri ve birbirlerinden öğrenmeye açık oldukları, tam bir güven ortamı vardır.",
      "D) Ortalama örgüt sağlığında ortalama bir güven düzeyinin, nadiren belirsizlik ve korkunun olduğu; yaratıcılığın, işletmeyi mevcut durumundan çok öteye götürmeye çalışılmadığı müddetçe özendirildiği; çalışanların risk alabildiği ama hata yapmaktan bazen korktukları bir ortam vardır.",
      "E) Zehirli ve zayıf örgüt sağlığında otokratik liderlik tarzı görülmektedir; kısıtlı ve ortalama örgüt sağlığında paternalist; iyi ve ideal örgüt sağlığında hizmetkâr liderlik mümkün olabilmektedir.",
    ],
    correctAnswer:
      "C) Kısıtlı örgüt sağlığında çalışanların tümünün birbirlerinin ihtiyaçlarına hizmet etmek için motive edildikleri ve birbirlerinden öğrenmeye açık oldukları, tam bir güven ortamı vardır.",
  },
  {
    id: 48,
    questionText:
      "48-) Aşağıdakilerden hangisi hizmetkâr liderliğin boyutları arasında sayılamaz?",
    options: [
      "A) Güçlendirme",
      "B) Otantiklik",
      "C) Karizma",
      "D) Geride Durma",
      "E) Cesaret",
    ],
    correctAnswer: "C) Karizma",
  },
  {
    id: 49,
    questionText:
      "49-) Aşağıdakilerden hangisi otantik liderliğin bileşenleri arasında sayılamaz?",
    options: [
      "A) Öz farkındalık",
      "B) Hizmet",
      "C) İçselleştirilmiş ahlaki bakış açısı",
      "D) Dengeli yönlendirme",
      "E) İlişkilerde şeffaflık",
    ],
    correctAnswer: "B) Hizmet",
  },
  {
    id: 50,
    questionText:
      "50-) Aşağıdakilerden hangisi yeniliğe liderlik etmede etkili olan liderlik tarzları arasında sayılamaz?",
    options: [
      "A) Dönüşümcü liderlik",
      "B) Çift yönlü liderlik",
      "C) Karizmatik liderlik",
      "D) Otokratik liderlik",
      "E) Vizyoner liderlik",
    ],
    correctAnswer: "D) Otokratik liderlik",
  },
  {
    id: 51,
    questionText: "51-) Aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Değişim sürecinde işletmelere rekabet avantajı sağlayacak kilit roldeki faktör yenilik yaratma ve yaygınlaştırmaktır.",
      "B) Sürdürülebilir bir rekabet üstünlüğü için gerekli yeniliği yaratmada insan faktörü yüzyılın en önemli üretim faktörü olarak dikkat çekmekte, insanın yaratıcı ve yenilikçi kapasitesini ortaya çıkaracak yöntem ve liderlik süreçleri önem taşımaktadır.",
      "C) Toplam kalite yönetimi yaklaşımı insan unsurunu; faaliyetleri ve nihai ürünü belirleyen dış müşteriler ve üretimi gerçekleştiren, onu sürekli geliştiren iç müşteriler (çalışanlar) olarak odak noktasına oturtarak yeniliğin önemini vurgulamıştır.",
      "D) İşletme yönetiminde yenilik yaratmadan sürekli aynı ürünleri üreterek başarı sağlamak da mümkündür.",
      "E) Öğrenen organizasyonlar, insan faktörünü işletme içinde bilgi toplama ve işleme kapasitesine sahip, yaratıcılığı ortaya çıkartabilecek olan yegâne unsur olarak görerek yeniliğin önemini vurgulamıştır.",
    ],
    correctAnswer:
      "D) İşletme yönetiminde yenilik yaratmadan sürekli aynı ürünleri üreterek başarı sağlamak da mümkündür.",
  },
  {
    id: 52,
    questionText: "52-) Aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Başarılı işletmelerin ekonomideki ağırlıkları incelendiğinde tarihsel olarak geçmişte tarım toplumları, sonraları endüstri toplumları, bugün ise bilgi toplumları önem kazanmıştır.",
      "B) İşletme yönetiminde mutlaka dış çevreye odaklanmak, değişmek ve yenilik yapmak gerekli değildir.",
      "C) Geleneksel üretim faktörlerinde azalan verim kanunu geçerliliğini korurken, bilgi daha yoğun olarak kullanıldığında üretim artışına etkisi azalan değil artan verim yaratmaktadır.",
      "D) Bilginin az bulunurluğu varsayımının ortadan kalkmasıyla eskiden karşı karşıya olunan bilgi eksikliği (bilgi darboğazı) aşılmış, ancak şimdi de yeterli bilgi olduğunda bununla ne yapılacağına karar verilememesi yani düşünce eksikliği (düşünce darboğazı) karşımıza çıkmaktadır.",
      "E) Bugün bilgiyi elde etmek ve kullanmak her zamankinden daha önemli, ancak bilgiyi kullanma şekli bilginin kendisinden daha da önemlidir.",
    ],
    correctAnswer:
      "B) İşletme yönetiminde mutlaka dış çevreye odaklanmak, değişmek ve yenilik yapmak gerekli değildir.",
  },
  {
    id: 53,
    questionText:
      "53-) Strateji, stratejik liderlik ve stratejik yönetime ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Strateji; rakiplerin faaliyetlerini inceleyerek, amaçlara ulaşmak için belirlenmiş, nihai sonuç odaklı, uzun dönemli, dinamik kararlar topluluğudur.",
      "B) Stratejik karar alma sürecinde yöneticiler yönetsel inisiyatifi etkileyen unsurlar ve kavramsal becerilerinin etkisi altında faaliyette bulunmaktadır. Bu nedenle stratejik liderlik, tüm bu stratejik kararları stratejik bir bilinç ile alabilme yeteneğine sahip üst yönetim liderliği olarak ele alınabilir.",
      "C) Yöneticilerin verdiği her karar stratejik karar değildir. Özellikle alt ve orta kademe yönetim günlük, rutin kararları yüksek belirlilik ortamında alabilmektedir.",
      "D) Üst yönetim çoğunlukla rutin, belirli, kısa vadeli kararlar almaktadır.",
      "E) Stratejik yönetim süreci, sürdürülebilir rekabet üstünlüğü sağlamak amacıyla kaynakların etkili ve verimli olarak kullanılmasına odaklanmakta; bir başka deyişle en tepeden işletmenin gideceği yöne, rakipleriyle rekabet ediş şekline, uzun dönem amaç ve rekabet üstünlüğünü koruma biçimine karar vermekle ilgilidir.",
    ],
    correctAnswer:
      "D) Üst yönetim çoğunlukla rutin, belirli, kısa vadeli kararlar almaktadır.",
  },
  {
    id: 54,
    questionText:
      "54-) '…………………' akıllı, güvenilir bir danışman veya yol gösterici olan Yunan mitolojisinden bir karakterin adıdır.",
    options: [
      "A) Koçluk",
      "B) Mentorluk",
      "C) Yöneticilik",
      "D) Rehberlik",
      "E) Danışmanlık",
    ],
    correctAnswer: "B) Mentorluk",
  },
  {
    id: 55,
    questionText:
      "55-) '……………' son iki-üç yüzyıldır kullanılan; bir kişinin bilgi ve becerilerini bir öğretim veya öğretme biçimi aracılığıyla daha üst seviyeye taşımaya yardımcı olan kişiyi belirten bir terimdir. Yirminci yüzyılda özellikle spor ve performans gerektiren işlerle ilgili olarak yaygın şekilde kullanılmaktadır.",
    options: [
      "A) Koçluk",
      "B) Mentorluk",
      "C) Yöneticilik",
      "D) Rehberlik",
      "E) Danışmanlık",
    ],
    correctAnswer: "A) Koçluk",
  },
  {
    id: 56,
    questionText:
      "56-) Aşağıdakilerden hangisi koçluk veya mentorluk süreçlerinin basamaklarından olamaz?",
    options: [
      "A) İhtiyaçların, arzuların ve benliğin farkına varmak için analiz",
      "B) Öz sorumluluk geliştirmek için planlama",
      "C) Stiller, teknikler ve beceriler kullanarak uygulama",
      "D) Başarı ve öğrenme düzeyini değerlendirme",
      "E) Danışanı gerektiğinde azarlama",
    ],
    correctAnswer: "E) Danışanı gerektiğinde azarlama",
  },
  {
    id: 57,
    questionText:
      "57-) Takım liderliğine ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "A) Organizasyonlarda kurulan takımların içinde genellikle birbirini tamamlayıcı ve farklı bilgi ve profesyonel tecrübeye sahip üyeler bir arada çalışmaktadır. Bu çeşitlilikteki kapasitelerin bir arada çalışması sebebiyle takımlardan daha yüksek bir performans beklenmektedir.",
      "B) Takımlara liderlik, tüm takım üyelerinin ortak bir hedefe ulaşma yönünde etkileşime girdiği karmaşık bir etkileme süreci olarak ele alınmalıdır.",
      "C) Takımlara liderlik ederken takım üyelerinin tamamlayıcı özellik ve niceliklerine ortam tanıyan, daha esnek ve dinamik bir süreç gerekli olmaktadır.",
      "D) Organizasyonlarda takımlar genellikle belirli bir iş ya da projenin tamamlanması için oluşturulmakta; bu nedenle takımı oluşturan bireylerin kendi kendilerine liderliği, yürütülen projeye uygun genellikle geçici görevlerini gerçekleştirirken takıma uyum sağlamaları beklenmektedir. Burada vurgu daha çok liderlikten ziyade etkili bir izleyicilik (takipçilik) ortaya koymaktadır.",
      "E) Takım üyelerinin belirsizliğe toleransının yüksek olması, farklı insanlardan gelen liderliği kabulü pek mümkün olmayan bir durumdur.",
    ],
    correctAnswer:
      "E) Takım üyelerinin belirsizliğe toleransının yüksek olması, farklı insanlardan gelen liderliği kabulü pek mümkün olmayan bir durumdur.",
  },
];

const ders3Ornek = [
  {
    id: 3001,
    questionText:
      "1-) Bu ders için henüz soru eklenmedi. Soruları store/questions.ts içindeki 'ders3Ornek' dizisine ekleyebilirsin.",
    options: [
      "A) Tamam, ekleyeceğim",
      "B) Anlaşıldı",
      "C) Devam et",
      "D) Şimdilik geç",
    ],
    correctAnswer: "A) Tamam, ekleyeceğim",
  },
  {
    id: 3002,
    questionText:
      "2-) Örnek soru: Ders adını ve açıklamasını questions.ts dosyasındaki 'lessons' dizisinden değiştirebilirsin.",
    options: ["A) title", "B) description", "C) accent", "D) Hepsi"],
    correctAnswer: "D) Hepsi",
  },
  {
    id: 3003,
    questionText:
      "3-) Soru sayısı sınırı yoktur, istediğin kadar ekleyebilirsin.",
    options: ["A) Doğru", "B) Yanlış"],
    correctAnswer: "A) Doğru",
  },
  {
    id: 3004,
    questionText:
      "1-) Bu ders için henüz soru eklenmedi. Soruları store/questions.ts içindeki 'ders3Ornek' dizisine ekleyebilirsin.",
    options: [
      "A) Tamam, ekleyeceğim",
      "B) Anlaşıldı",
      "C) Devam et",
      "D) Şimdilik geç",
    ],
    correctAnswer: "A) Tamam, ekleyeceğim",
  },
  {
    id: 3005,
    questionText:
      "2-) Örnek soru: Ders adını ve açıklamasını questions.ts dosyasındaki 'lessons' dizisinden değiştirebilirsin.",
    options: ["A) title", "B) description", "C) accent", "D) Hepsi"],
    correctAnswer: "D) Hepsi",
  },
  {
    id: 3006,
    questionText:
      "3-) Soru sayısı sınırı yoktur, istediğin kadar ekleyebilirsin.",
    options: ["A) Doğru", "B) Yanlış"],
    correctAnswer: "A) Doğru",
  },
  {
    id: 3007,
    questionText:
      "1-) Bu ders için henüz soru eklenmedi. Soruları store/questions.ts içindeki 'ders3Ornek' dizisine ekleyebilirsin.",
    options: [
      "A) Tamam, ekleyeceğim",
      "B) Anlaşıldı",
      "C) Devam et",
      "D) Şimdilik geç",
    ],
    correctAnswer: "A) Tamam, ekleyeceğim",
  },
  {
    id: 3008,
    questionText:
      "2-) Örnek soru: Ders adını ve açıklamasını questions.ts dosyasındaki 'lessons' dizisinden değiştirebilirsin.",
    options: ["A) title", "B) description", "C) accent", "D) Hepsi"],
    correctAnswer: "D) Hepsi",
  },
  {
    id: 3009,
    questionText:
      "3-) Soru sayısı sınırı yoktur, istediğin kadar ekleyebilirsin.",
    options: ["A) Doğru", "B) Yanlış"],
    correctAnswer: "A) Doğru",
  },
  {
    id: 3010,
    questionText:
      "1-) Bu ders için henüz soru eklenmedi. Soruları store/questions.ts içindeki 'ders3Ornek' dizisine ekleyebilirsin.",
    options: [
      "A) Tamam, ekleyeceğim",
      "B) Anlaşıldı",
      "C) Devam et",
      "D) Şimdilik geç",
    ],
    correctAnswer: "A) Tamam, ekleyeceğim",
  },
  {
    id: 3011,
    questionText:
      "2-) Örnek soru: Ders adını ve açıklamasını questions.ts dosyasındaki 'lessons' dizisinden değiştirebilirsin.",
    options: ["A) title", "B) description", "C) accent", "D) Hepsi"],
    correctAnswer: "D) Hepsi",
  },
  {
    id: 3012,
    questionText:
      "3-) Soru sayısı sınırı yoktur, istediğin kadar ekleyebilirsin.",
    options: ["A) Doğru", "B) Yanlış"],
    correctAnswer: "A) Doğru",
  },
];

export const lessons: Lesson[] = [
  {
    id: "Açık Kaynak İşletim Sistemleri",
    title: "Açık Kaynak İşletim Sistemleri",
    description: `${AcikKaynak.length} soruluk tam tarama testi.`,
    accent: "indigo",
    questions: AcikKaynak,
  },
  {
    id: "Dijital Pazarlama",
    title: "Dijital Pazarlama",
    description: `${DijitalPazarlama.length} — soruları sen ekleyeceksin.`,
    accent: "fuchsia",
    questions: DijitalPazarlama,
  },
  {
    id: "Stratejik Yönetim",
    title: "Stratejik Yönetim",
    description: `${ders3Ornek.length} — soruları sen ekleyeceksin.`,
    accent: "emerald",
    questions: ders3Ornek,
  },
];
