# Video Assets

## Struktur Folder

```
public/
├── videos/
│   ├── racing-system.mp4          # Video demo Racing System
│   ├── banking-system.mp4         # Video demo Banking System  
│   ├── job-management.mp4         # Video demo Job Management UI
│   ├── gang-territory.mp4         # Video demo Gang Territory System
│   └── thumbnails/
│       ├── racing-system.jpg      # Thumbnail Racing System
│       ├── banking-system.jpg     # Thumbnail Banking System
│       ├── job-management.jpg     # Thumbnail Job Management UI
│       └── gang-territory.jpg     # Thumbnail Gang Territory System
```

## Cara Menggunakan

1. **Video Files**: Letakkan file MP4 Anda di folder `public/videos/`
   - Format yang disarankan: MP4 dengan codec H.264
   - Resolusi yang disarankan: 1920x1080 atau 1280x720
   - Durasi yang disarankan: 30-120 detik

2. **Thumbnail Files**: Letakkan gambar thumbnail di folder `public/videos/thumbnails/`
   - Format yang disarankan: JPG atau PNG
   - Resolusi yang disarankan: 1280x720 (16:9 aspect ratio)
   - Ukuran file: < 500KB untuk performa optimal

## Contoh Penamaan File

- Video: `racing-system.mp4`
- Thumbnail: `racing-system.jpg`

## Akses File

File dapat diakses melalui URL relatif:
- Video: `/videos/racing-system.mp4`
- Thumbnail: `/videos/thumbnails/racing-system.jpg`

## Tips Optimasi

1. **Kompresi Video**: Gunakan tool seperti FFmpeg untuk mengompres video
2. **Format Thumbnail**: Gunakan format WebP untuk ukuran file yang lebih kecil
3. **Loading**: Video akan menggunakan `preload="metadata"` untuk loading yang optimal
