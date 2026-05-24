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
    id: 2001,
    questionText:
      "1-) Bu ders için henüz soru eklenmedi. Soruları store/questions.ts içindeki 'DijitalPazarlama' dizisine ekleyebilirsin.",
    options: [
      "A) Tamam, ekleyeceğim",
      "B) Anlaşıldı",
      "C) Devam et",
      "D) Şimdilik geç",
    ],
    correctAnswer: "A) Tamam, ekleyeceğim",
  },
  {
    id: 2002,
    questionText:
      "2-) Örnek soru: Bu ders şu anda placeholder olarak duruyor. Format aynı kalmalı.",
    options: [
      "A) Soru metni",
      "B) Şıklar dizisi",
      "C) Doğru cevap stringi",
      "D) Hepsi",
    ],
    correctAnswer: "D) Hepsi",
  },
  {
    id: 2003,
    questionText:
      "3-) Soru eklerken her sorunun id'sinin benzersiz olduğundan emin ol.",
    options: ["A) Evet", "B) Hayır"],
    correctAnswer: "A) Evet",
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
    title: "Ders 2",
    description: `${DijitalPazarlama.length} — soruları sen ekleyeceksin.`,
    accent: "fuchsia",
    questions: DijitalPazarlama,
  },
  {
    id: "easteregg",
    title: "???",
    description: `${ders3Ornek.length} — soruları sen ekleyeceksin.`,
    accent: "emerald",
    questions: ders3Ornek,
  },
];
