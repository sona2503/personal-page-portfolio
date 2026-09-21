export type Language = "en" | "id";

export const translations = {
  en: {
    nav: {
      experience: "Experience",
      portfolio: "Portfolio",
      skills: "Skills",
      certificates: "Certificates",
      contact: "Contact",
      hireMe: "Hire me",
    },
    hero: {
      badge: "Available for project",
      greetingPrefix: "Hi, I'm",
      descriptionBold: "Software Engineer & IT Consultant",
      descriptionRest:
        "specializing in financial information systems. 3+ years turning complex business logic into clean, production-grade code with ASP.NET Core, Next.js, Node.js, React, and MySQL.",
      downloadCv: "Download my CV",
      contactMe: "Contact me",
      openToProjects: "Open to projects",
    },
    experience: {
      heading: "Real",
      headingAccent: "Problem Solutions",
      subheading: "Experience",
      educationTitle: "Education",
      teachingTitle: "Teaching",
      workTitle: "Work Experience",
      education: {
        school: "Yogyakarta University of Technology",
        degree: "Information Systems",
        period: "2020-2024",
        description:
          "Studied core computer science and information systems curriculum, covering software development, databases, and systems analysis for real-world applications.",
      },
      teaching: {
        school: "Yogyakarta University of Technology",
        role: "Assistant Professor",
        period: "2024",
        description:
          "Assisted lecturers in teaching programming and systems courses, mentoring students through practical software development exercises.",
      },
      work: [
        {
          company: "PT. Gama Integra Informatika",
          role: "Web Programmer",
          period: "2023",
          description:
            "Built and maintained web applications, collaborating with cross-functional teams to deliver features on schedule and improve code quality.",
        },
        {
          company: "PT. Swevel Universal Media",
          role: "Database Administrator",
          period: "2023",
          description:
            "Managed and optimized production databases, ensuring data integrity, performance tuning, and reliable backup strategies.",
        },
        {
          company: "KAP Sandra Pracipta, CPA",
          role: "Software Engineer",
          period: "2025-now",
          description:
            "Building and maintaining financial information systems for public-sector clients, using Laravel, React, and MySQL end-to-end.",
        },
      ],
    },
    portfolio: {
      eyebrow: "Most impactful project",
      heading: "Explore My Popular",
      headingAccent: "Projects",
      projects: [
        {
          tag: "HIGHER EDUCATION",
          title: "SIMAHA — Student Organization Management System",
          description:
            "A web-based system for Yogyakarta University of Technology to manage proposal submissions and activity reports for student organizations and clubs (UKM) campus-wide.",
        },
        {
          tag: "SAAS · TENDER INTELLIGENCE",
          title: "TenderPlus — Tender Monitoring & Bid Analysis Platform",
          description:
            "A subscription-based SaaS platform aggregating public tender data from Indonesian government agencies (including Kementerian PUPR), with competitor tracking and win-probability analysis for paid users. Free-tier users get access to general tender listings.",
        },
        {
          tag: "ENTERPRISE · QUALITY MANAGEMENT",
          title: "SMM — Quality Management System for KAP Sandra Pracipta",
          description:
            "A comprehensive enterprise system combining a public-facing landing page (marketing and recruitment) with an internal platform covering employee attendance, KPI tracking, e-learning, audit document storage, internal accounting, correspondence management, and digital audit working papers.",
        },
        {
          tag: "FINTECH · NON-PROFIT",
          title: "FISBAZ — Zakat Financial Management System",
          description:
            "A specialized accounting platform for Indonesia's National Zakat Board (BAZNAS), generating standardized financial statements for zakat, infaq, and sedekah funds in compliance with PSAK 109 and applicable Indonesian regulations. Features real-time dashboards, fund tracking, and secure data management.",
        },
        {
          tag: "GOVTECH · HEALTHCARE FINANCE",
          title: "FISBLUD — BLUD Financial Management System",
          description:
            "An integrated accounting platform for Regional Public Service Agencies (BLUD), primarily serving Puskesmas (community health centers), compliant with Ministry of Health (Kemenkes) and Indonesian government accounting standards. Features hierarchical reporting, allowing sub-district and district health office heads to review consolidated reports across all Puskesmas under their jurisdiction.",
        },
      ],
    },
    skills: {
      eyebrow: "My",
      eyebrowAccent: "Stack",
      heading: "Professional Skills",
    },
    certificates: {
      eyebrow: "Certificate",
      heading: "Professional",
      headingAccent: "Certificate",
      items: [
        {
          title: "Machine Learning Professional Certification",
          issuer: "Rapidminer",
          year: "2023",
        },
        {
          title: "Data Engineering Professional Certification",
          issuer: "Rapidminer",
          year: "2022",
        },
      ],
    },
    contact: {
      eyebrow: "Get in touch",
      headingLine1: "Let's work",
      headingLine2: "together",
      description:
        "I'm open to software development and IT consulting engagements, short or long-term. New system, feature addition, or just a second pair of eyes — let's talk.",
      form: {
        nameLabel: "Name *",
        namePlaceholder: "Jane Smith",
        emailLabel: "Email *",
        emailPlaceholder: "jane@company.com",
        subjectLabel: "Subject",
        subjectPlaceholder: "Project inquiry",
        messageLabel: "Message *",
        messagePlaceholder: "Tell me about your project...",
        sendButton: "Send message →",
        sending: "Sending...",
        successMessage: "Your message has been sent successfully via email. I'll get back to you soon. Thank you :)",
        errorMessage: "Something went wrong. Please ensure you have filled in all the details on the form or send an email directly via the link.",
      },
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with",
    },
  },
  id: {
    nav: {
      experience: "Pengalaman",
      portfolio: "Portofolio",
      skills: "Keahlian",
      certificates: "Sertifikat",
      contact: "Kontak",
      hireMe: "Rekrut saya",
    },
    hero: {
      badge: "Tersedia untuk proyek",
      greetingPrefix: "Hai, saya",
      descriptionBold: "Software Engineer & IT Consultant",
      descriptionRest:
        "yang fokus pada sistem informasi keuangan. 3+ tahun pengalaman mengubah logika bisnis yang kompleks menjadi kode production-grade yang bersih dengan ASP.NET Core, Next.js, Node.js, React, dan MySQL.",
      downloadCv: "Unduh CV saya",
      contactMe: "Hubungi saya",
      openToProjects: "Terbuka untuk proyek",
    },
    experience: {
      heading: "Solusi Nyata",
      headingAccent: "untuk Setiap Masalah",
      subheading: "Pengalaman",
      educationTitle: "Pendidikan",
      teachingTitle: "Mengajar",
      workTitle: "Pengalaman Kerja",
      education: {
        school: "Universitas Teknologi Yogyakarta",
        degree: "Sistem Informasi",
        period: "2020-2024",
        description:
          "Menempuh kurikulum inti ilmu komputer dan sistem informasi, mencakup pengembangan perangkat lunak, basis data, dan analisis sistem untuk aplikasi dunia nyata.",
      },
      teaching: {
        school: "Universitas Teknologi Yogyakarta",
        role: "Asisten Dosen",
        period: "2024",
        description:
          "Membantu dosen dalam mengajar mata kuliah pemrograman dan sistem, membimbing mahasiswa melalui latihan pengembangan perangkat lunak secara praktik.",
      },
      work: [
        {
          company: "PT. Gama Integra Informatika",
          role: "Web Programmer",
          period: "2023",
          description:
            "Membangun dan memelihara aplikasi web, berkolaborasi dengan tim lintas fungsi untuk mengirimkan fitur tepat waktu dan meningkatkan kualitas kode.",
        },
        {
          company: "PT. Swevel Universal Media",
          role: "Database Administrator",
          period: "2023",
          description:
            "Mengelola dan mengoptimalkan basis data produksi, memastikan integritas data, performance tuning, dan strategi backup yang andal.",
        },
        {
          company: "KAP Sandra Pracipta, CPA",
          role: "Software Engineer",
          period: "2025-sekarang",
          description:
            "Membangun dan memelihara sistem informasi keuangan untuk klien sektor publik, menggunakan Laravel, React, dan MySQL secara menyeluruh.",
        },
      ],
    },
    portfolio: {
      eyebrow: "Proyek paling berdampak",
      heading: "Jelajahi",
      headingAccent: "Proyek Unggulan Saya",
      projects: [
        {
          tag: "PENDIDIKAN TINGGI",
          title: "SIMAHA — Sistem Manajemen Organisasi Mahasiswa",
          description:
            "Sistem berbasis web untuk Universitas Teknologi Yogyakarta dalam mengelola pengajuan proposal dan laporan kegiatan organisasi mahasiswa dan UKM di seluruh kampus.",
        },
        {
          tag: "SAAS · TENDER INTELLIGENCE",
          title: "TenderPlus — Platform Monitoring & Analisis Tender",
          description:
            "Platform SaaS berlangganan yang mengumpulkan data tender publik dari instansi pemerintah Indonesia (termasuk Kementerian PUPR), dengan pelacakan pesaing dan analisis peluang menang untuk pengguna berbayar. Pengguna gratis mendapat akses ke daftar tender umum.",
        },
        {
          tag: "ENTERPRISE · QUALITY MANAGEMENT",
          title: "SMM — Sistem Manajemen Mutu untuk KAP Sandra Pracipta",
          description:
            "Sistem enterprise komprehensif yang menggabungkan landing page publik (pemasaran dan rekrutmen) dengan platform internal yang mencakup presensi karyawan, pelacakan KPI, e-learning, penyimpanan dokumen audit, akuntansi internal, manajemen surat-menyurat, dan kertas kerja audit digital.",
        },
        {
          tag: "FINTECH · NON-PROFIT",
          title: "FISBAZ — Sistem Manajemen Keuangan Zakat",
          description:
            "Platform akuntansi khusus untuk Badan Amil Zakat Nasional (BAZNAS), menghasilkan laporan keuangan terstandarisasi untuk dana zakat, infak, dan sedekah sesuai PSAK 109 dan peraturan Indonesia yang berlaku. Dilengkapi dashboard real-time, pelacakan dana, dan manajemen data yang aman.",
        },
        {
          tag: "GOVTECH · HEALTHCARE FINANCE",
          title: "FISBLUD — Sistem Manajemen Keuangan BLUD",
          description:
            "Platform akuntansi terintegrasi untuk Badan Layanan Umum Daerah (BLUD), terutama melayani Puskesmas, sesuai dengan standar Kementerian Kesehatan dan akuntansi pemerintah Indonesia. Dilengkapi pelaporan berjenjang, memungkinkan kepala dinas kesehatan kecamatan dan kabupaten meninjau laporan konsolidasi seluruh Puskesmas di wilayahnya.",
        },
      ],
    },
    skills: {
      eyebrow: "Stack",
      eyebrowAccent: "Saya",
      heading: "Keahlian Profesional",
    },
    certificates: {
      eyebrow: "Sertifikat",
      heading: "Sertifikat",
      headingAccent: "Profesional",
      items: [
        {
          title: "Machine Learning Professional Certification",
          issuer: "Rapidminer",
          year: "2023",
        },
        {
          title: "Data Engineering Professional Certification",
          issuer: "Rapidminer",
          year: "2022",
        },
      ],
    },
    contact: {
      eyebrow: "Hubungi saya",
      headingLine1: "Mari bekerja",
      headingLine2: "bersama",
      description:
        "Saya terbuka untuk proyek pengembangan software dan konsultasi IT, jangka pendek maupun panjang. Sistem baru, penambahan fitur, atau sekadar butuh masukan — mari diskusi.",
      form: {
        nameLabel: "Nama *",
        namePlaceholder: "Jane Smith",
        emailLabel: "Email *",
        emailPlaceholder: "jane@company.com",
        subjectLabel: "Subjek",
        subjectPlaceholder: "Pertanyaan proyek",
        messageLabel: "Pesan *",
        messagePlaceholder: "Ceritakan tentang proyek Anda...",
        sendButton: "Kirim pesan →",
        sending: "Mengirim...",
        successMessage: "Anda berhasil mengirim pesan. Pesan Anda dikirim via email, saya akan segera menghubungi Anda. Terima kasih :)",
        errorMessage: "Terjadi kesalahan. Pastikan anda mengisi semua data pada form atau kirim email langsung dari link tautan.",
      },
    },
    footer: {
      rights: "Seluruh hak cipta dilindungi.",
      builtWith: "Dibuat dengan",
    },
  },
} as const;
