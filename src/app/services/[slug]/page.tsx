import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import AdminImageUpload from "@/components/AdminImageUpload";
import Navbar from "@/components/navbar";
import ServiceImageGallery from "@/components/ServiceImageGallery";

// This would typically come from a database or CMS
const services = [
  {
    icon: "/ibu-mengandung.svg",
    title: "Rawatan Ibu Mengandung",
    desc: "Kami menyediakan perkhidmatan seperti <i>ultrasound scan baby</i>, buka buku pink, ujian kehamilan, minum air gula dan lain-lain",
    button: "Ketahui lebih lanjut",
  },
  {
    icon: "/services/rawatan-pesakit-luar.png",
    title: "Rawatan Pesakit Luar",
    desc: "Kami menyediakan rawatan kesihatan yang biasa dilakukan di klinik kami, contohnya seperti rawatan demam, batuk, selsema, gastrik atau GERD, migrain dan lain-lain",
    button: "Ketahui lebih lanjut",
  },
  {
    icon: "/services/pemeriksaan-kesihatan.png",
    title: "Pemeriksaan Kesihatan",
    desc: "Kami menyediakan perkhidmatan untuk pelbagai jenis pemeriksaan kesihatan seperti pelajar, pekerja asing, GDL dan e-hailing.",
    button: "Ketahui lebih lanjut",
  },
  {
    icon: "/services/ultrasound-scan.png",
    title: "Ultrasound Scan",
    desc: "Kami menggunakan mesin Ultrasound yang terkini yang boleh mengimbas secara 2d, 3d, 4d & 5d.",
    button: "Ketahui lebih lanjut",
  },
  {
    icon: "/services/pemeriksaan-kuning-bayi.png",
    title: "Pemeriksaan Kuning Bayi",
    desc: "Inovaso perubatan terkini yang dikembangkan secara eksklusif untuk menghilangkan kesulitan dan kesakitan bayi",
    button: "Ketahui lebih lanjut",
  },
  {
    icon: "/services/ujian-darah.png",
    title: "Ujian Darah",
    desc: "Kami menyediakan perkhidmatan ujian saringan kesihatan melalui pengambilan darah",
    button: "Ketahui lebih lanjut",
  },
  {
    icon: "/services/cucian-luka.png",
    title: "Cucian Luka",
    desc: "Kami menyediakan perkhidmatan cucian luka seperti luka kencing manis, luka selepas operasi, luka kemalangan dan lain-lain",
    button: "Ketahui lebih lanjut",
  },
  {
    icon: "/services/rawatan-asma.png",
    title: "Rawatan Asma & Sedut Kahak",
    desc: "Kami menyediakan rawatan nebulizer untuk pesakit asma. Kami juga melakukan sedutan kahak bagi melegakan pesakit yang batuk terbahak",
    button: "Ketahui lebih lanjut",
  },
  {
    icon: "/services/vaksinasi-imunisasi.png",
    title: "Vaksinasi & Imunisasi",
    desc: "Dapatkan vaksin untuk pengendali makanan iaitu vaksin typhoid, vaksin influenza dan Umrah & Hajj",
    button: "Ketahui lebih lanjut",
  },
  {
    icon: "/services/housecall-doctor.png",
    title: "Housecall Doctor",
    desc: "Kami menyediakan perkhidmatan rawatan doktor ke rumah anda",
    button: "Ketahui lebih lanjut",
  },
  {
    icon: "/services/covid-rtk-pcr.png",
    title: "Covid RTK & PCR",
    desc: "Kami menyediakan perkhidmatan ujian covid RTK dan PCR secara temu janji",
    button: "Ketahui lebih lanjut",
  },
  {
    icon: "/services/perancangan-keluarga.png",
    title: "Perancangan Keluarga",
    desc: "Kami menyediakan perkhidmatan suntikan IM Depo bagi mencegah kehamilan.",
    button: "Ketahui lebih lanjut",
  },
  {
    icon: "/services/kesihatan-wanita.png",
    title: "Kesihatan Wanita",
    desc: "Kami menyediakan perkhidmatan ujian untuk mengetahui tahap kesuburan anda dan ujian Pap Smear untuk saringan kanser pangkal rahim.",
    button: "Ketahui lebih lanjut",
  },
  {
    icon: "/services/perkhidmatan-kaunseling.png",
    title: "Perkhidmatan Kaunseling",
    desc: "Kami juga menyediakan perkhidmatan kaunseling",
    button: "Ketahui lebih lanjut",
  },

  // Add more features as needed
];

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ServicePage(props: Props) {
  const { slug } = props.params;
  const service = services.find(
    (s) =>
      s.title
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "-")
        .replace(/\s+/g, "-") === slug
  );

  if (!service) {
    notFound();
  }

  // Check if user is admin
  const cookieStore = await cookies();
  const isAdmin =
    cookieStore.get("admin_token")?.value === process.env.ADMIN_TOKEN;

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-8 items-center">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-[#18181a] mb-4">
                {service.title}
              </h1>
              <p
                className="text-gray-700 text-lg mb-6"
                dangerouslySetInnerHTML={{ __html: service.desc }}
              />
            </div>
            <div className="flex-shrink-0">
              <ServiceImageGallery
                serviceTitle={service.title}
                defaultIcon={service.icon}
                isAdmin={isAdmin}
              />

              {isAdmin && (
                <div className="mt-4">
                  <AdminImageUpload serviceName={service.title} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
