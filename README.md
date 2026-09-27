# Öğrenci/Özel Ders (Tutoring) Platformu

## Proje Konusu
Öğrenciler ile eğitmenleri buluşturan, randevu/rezervasyon tabanlı özel ders platformu.
Ders paketi satın alma, ödeme takibi ve ders sonrası değerlendirme (review) süreçlerini kapsar.

## Roller
- **Öğrenci:** Eğitmen arama, rezervasyon oluşturma, paket satın alma, değerlendirme yazma
- **Eğitmen:** Müsaitlik belirleme, rezervasyon onaylama/iptal etme
- **Veli:** Bağlı öğrenci adına rezervasyon/paket işlemleri, öğrenci programını görme
- **Admin:** Tüm CRUD işlemleri, kullanıcı/rol yönetimi, soft-delete geri alma, hard delete

## Teknoloji Stack
- **Backend:** Nest.js (TypeScript) + Prisma ORM + PostgreSQL
- **Frontend:** Expo & React Native
- **Auth:** JWT + bcrypt
- **Dokümantasyon:** Swagger / OpenAPI

## Mimari
Katmanlı mimari: Controller → Service → Repository → DTO
Klasör yapısı: Package by Feature

## Durum
- [x] Hafta 1: ER diyagramı ve rol-yetki tablosu tamamlandı
- [ ] Hafta 2: Backend iskeleti, Prisma kurulumu, Swagger kurulumu
- [ ] Hafta 3-4: Auth ve RBAC
- [ ] Hafta 5-10: İş modülleri
- [ ] Hafta 11-17: Mobil arayüz ve Admin Paneli
- [ ] Hafta 18-20: Test ve son düzeltmeler
