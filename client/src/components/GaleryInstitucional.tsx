import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { useI18n } from "@/i18n";

type GalleryCategory = "equipe" | "projetos" | "eventos" | "campo" | "institucional" | "bastidores";

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: GalleryCategory;
  alt: string;
}

export default function GaleryInstitucional() {
  const { t } = useI18n();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Dados de exemplo - será preenchido com imagens reais
  const galleryImages: GalleryImage[] = [
    {
      id: "1",
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      title: "Equipe em Ação",
      category: "equipe",
      alt: "Equipe Grupo Arqueo",
    },
    {
      id: "2",
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      title: "Escavação em Campo",
      category: "campo",
      alt: "Trabalho de campo",
    },
    {
      id: "3",
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      title: "Evento Institucional",
      category: "eventos",
      alt: "Evento",
    },
    {
      id: "4",
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      title: "Projeto em Desenvolvimento",
      category: "projetos",
      alt: "Projeto",
    },
    {
      id: "5",
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      title: "Documentação Técnica",
      category: "institucional",
      alt: "Documentação",
    },
    {
      id: "6",
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      title: "Bastidores do Trabalho",
      category: "bastidores",
      alt: "Bastidores",
    },
  ];

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <section
      className="relative w-full py-20 lg:py-24"
      style={{
        backgroundColor: "#FFFFFF",
        padding: "var(--space-section) var(--container-padding)",
      }}
    >
      {/* Background sutil */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #861720 0%, transparent 50%), radial-gradient(circle at 80% 50%, #EE7501 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título e Subtítulo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16 text-center"
        >
          <h2
            className="font-bold leading-tight mb-4"
            style={{
              color: "#1A1A1A",
              fontSize: "var(--text-section-title)",
            }}
          >
            {t.quemSomos.galeria.title}
          </h2>
          <p
            className="leading-relaxed max-w-2xl mx-auto"
            style={{
              color: "#666666",
              fontSize: "16px",
            }}
          >
            {t.quemSomos.galeria.subtitle}
          </p>
        </motion.div>

        {/* Grid de Imagens - 3 colunas desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {galleryImages.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              {/* Card com imagem */}
              <div
                className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl"
                style={{
                  aspectRatio: "4/3",
                  backgroundColor: "#F5F5F5",
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay com categoria e título */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-wide mb-1"
                    style={{ color: "#EE7501" }}
                  >
                    {t.quemSomos.galeria.categories[image.category as GalleryCategory]}
                  </p>
                  <p className="text-white font-semibold text-sm leading-tight">
                    {image.title}
                  </p>
                </div>

                {/* Ícone de zoom no hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm"
                    style={{
                      backgroundColor: "rgba(238, 117, 1, 0.9)",
                    }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Título e categoria abaixo do card */}
              <div className="mt-4">
                <p
                  className="text-xs font-semibold uppercase tracking-wide mb-1"
                  style={{ color: "#EE7501" }}
                >
                  {t.quemSomos.galeria.categories[image.category as GalleryCategory]}
                </p>
                <p
                  className="font-semibold leading-tight"
                  style={{ color: "#1A1A1A", fontSize: "14px" }}
                >
                  {image.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Lightbox */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="max-w-4xl w-full p-0 border-0 bg-black/95"
          showCloseButton={false}
        >
          <div className="relative w-full h-auto">
            {/* Imagem ampliada */}
            {selectedImage && (
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto object-contain"
                  style={{ maxHeight: "80vh" }}
                />

                {/* Informações sobre a imagem */}
                <div className="p-6 bg-black/80 text-white">
                  <p
                    className="text-xs font-semibold uppercase tracking-wide mb-2"
                    style={{ color: "#EE7501" }}
                  >
                    {t.quemSomos.galeria.categories[selectedImage.category]}
                  </p>
                  <h3 className="text-lg font-semibold">
                    {selectedImage.title}
                  </h3>
                </div>

                {/* Botão fechar */}
                <DialogClose className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <X className="w-6 h-6 text-white" />
                </DialogClose>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
