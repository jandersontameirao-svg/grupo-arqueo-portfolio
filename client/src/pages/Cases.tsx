import { useState, useMemo } from "react";
import { ChevronDown, Search, MapPin, Users, Briefcase, Calendar } from "lucide-react";
import projectsData from "../data/projects.json";
import statsData from "../data/stats.json";

interface Project {
  id: number;
  ano: number;
  projeto: string;
  empreendimento: string;
  tipo: string;
  empreendedor: string;
  coordenadores: string[];
  locais: Array<{ estado: string; municipio: string }>;
  uf_principal: string;
  nivel: string;
  tipo_autorizacao: string;
}

export default function Cases() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [expandedFilters, setExpandedFilters] = useState<Record<string, boolean>>({
    estado: true,
    tipo: true,
    ano: false,
  });

  const projects: Project[] = projectsData;

  // Filtrar projetos
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        searchTerm === "" ||
        project.projeto.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.empreendimento.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.empreendedor.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesState = selectedState === "" || project.uf_principal === selectedState;
      const matchesType = selectedType === "" || project.tipo === selectedType;
      const matchesYear = selectedYear === "" || project.ano.toString() === selectedYear;

      return matchesSearch && matchesState && matchesType && matchesYear;
    });
  }, [searchTerm, selectedState, selectedType, selectedYear]);

  // Extrair opções únicas
  const states = Object.keys(statsData.estados).sort();
  const types = Object.keys(statsData.tipos).sort();
  const years = statsData.anos.sort((a, b) => b - a);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAFAF9" }}>
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://cdn.jsdelivr.net/gh/grupo-arqueo/assets/logo-10-anos.png"
              alt="10 Anos"
              className="h-12 w-auto"
            />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-4" style={{ color: "#1A1A1A" }}>
            Nossos Cases
          </h1>
          <p className="text-lg" style={{ color: "#666666" }}>
            Portfólio de {statsData.total_projetos} projetos de arqueologia preventiva realizados
            entre {Math.min(...statsData.anos)} e {Math.max(...statsData.anos)}
          </p>
        </div>
      </header>

      {/* Estatísticas */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold" style={{ color: "#EE7501" }}>
                {statsData.total_projetos}
              </div>
              <p className="text-sm mt-2" style={{ color: "#999999" }}>
                Projetos Realizados
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold" style={{ color: "#861720" }}>
                {states.length}
              </div>
              <p className="text-sm mt-2" style={{ color: "#999999" }}>
                Estados Atendidos
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold" style={{ color: "#2C7EB3" }}>
                {types.length}
              </div>
              <p className="text-sm mt-2" style={{ color: "#999999" }}>
                Tipos de Empreendimentos
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold" style={{ color: "#FFD700" }}>
                {Math.max(...statsData.anos) - Math.min(...statsData.anos) + 1}
              </div>
              <p className="text-sm mt-2" style={{ color: "#999999" }}>
                Anos de Atuação
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filtros */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-4">
              <h3 className="text-lg font-bold mb-6" style={{ color: "#1A1A1A" }}>
                Filtros
              </h3>

              {/* Busca */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2" style={{ color: "#1A1A1A" }}>
                  Buscar
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4" style={{ color: "#999999" }} />
                  <input
                    type="text"
                    placeholder="Projeto, empreendimento..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Estado */}
              <div className="mb-6">
                <button
                  onClick={() =>
                    setExpandedFilters((prev) => ({
                      ...prev,
                      estado: !prev.estado,
                    }))
                  }
                  className="w-full flex items-center justify-between mb-3"
                >
                  <span className="text-sm font-semibold" style={{ color: "#1A1A1A" }}>
                    Estado
                  </span>
                  <ChevronDown
                    className="w-4 h-4"
                    style={{
                      transform: expandedFilters.estado ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}
                  />
                </button>
                {expandedFilters.estado && (
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    <button
                      onClick={() => setSelectedState("")}
                      className="w-full text-left px-3 py-2 rounded text-sm"
                      style={{
                        backgroundColor: selectedState === "" ? "#EE7501" : "#F5F5F5",
                        color: selectedState === "" ? "#FFFFFF" : "#1A1A1A",
                      }}
                    >
                      Todos
                    </button>
                    {states.map((state) => (
                      <button
                        key={state}
                        onClick={() => setSelectedState(state)}
                        className="w-full text-left px-3 py-2 rounded text-sm"
                        style={{
                          backgroundColor: selectedState === state ? "#EE7501" : "#F5F5F5",
                          color: selectedState === state ? "#FFFFFF" : "#1A1A1A",
                        }}
                      >
                        {state} ({statsData.estados[state as keyof typeof statsData.estados]})
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Tipo */}
              <div className="mb-6">
                <button
                  onClick={() =>
                    setExpandedFilters((prev) => ({
                      ...prev,
                      tipo: !prev.tipo,
                    }))
                  }
                  className="w-full flex items-center justify-between mb-3"
                >
                  <span className="text-sm font-semibold" style={{ color: "#1A1A1A" }}>
                    Tipo
                  </span>
                  <ChevronDown
                    className="w-4 h-4"
                    style={{
                      transform: expandedFilters.tipo ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}
                  />
                </button>
                {expandedFilters.tipo && (
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    <button
                      onClick={() => setSelectedType("")}
                      className="w-full text-left px-3 py-2 rounded text-sm"
                      style={{
                        backgroundColor: selectedType === "" ? "#EE7501" : "#F5F5F5",
                        color: selectedType === "" ? "#FFFFFF" : "#1A1A1A",
                      }}
                    >
                      Todos
                    </button>
                    {types.map((type) => (
                      <button
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className="w-full text-left px-3 py-2 rounded text-sm"
                        style={{
                          backgroundColor: selectedType === type ? "#EE7501" : "#F5F5F5",
                          color: selectedType === type ? "#FFFFFF" : "#1A1A1A",
                        }}
                      >
                        {type} ({statsData.tipos[type as keyof typeof statsData.tipos]})
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Ano */}
              <div>
                <button
                  onClick={() =>
                    setExpandedFilters((prev) => ({
                      ...prev,
                      ano: !prev.ano,
                    }))
                  }
                  className="w-full flex items-center justify-between mb-3"
                >
                  <span className="text-sm font-semibold" style={{ color: "#1A1A1A" }}>
                    Ano
                  </span>
                  <ChevronDown
                    className="w-4 h-4"
                    style={{
                      transform: expandedFilters.ano ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}
                  />
                </button>
                {expandedFilters.ano && (
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    <button
                      onClick={() => setSelectedYear("")}
                      className="w-full text-left px-3 py-2 rounded text-sm"
                      style={{
                        backgroundColor: selectedYear === "" ? "#EE7501" : "#F5F5F5",
                        color: selectedYear === "" ? "#FFFFFF" : "#1A1A1A",
                      }}
                    >
                      Todos
                    </button>
                    {years.map((year) => (
                      <button
                        key={year}
                        onClick={() => setSelectedYear(year.toString())}
                        className="w-full text-left px-3 py-2 rounded text-sm"
                        style={{
                          backgroundColor: selectedYear === year.toString() ? "#EE7501" : "#F5F5F5",
                          color: selectedYear === year.toString() ? "#FFFFFF" : "#1A1A1A",
                        }}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Grid de Projetos */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold" style={{ color: "#1A1A1A" }}>
                {filteredProjects.length} Projetos
              </h2>
            </div>

            {filteredProjects.length === 0 ? (
              <div
                className="text-center py-12 rounded-2xl"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid #E6E6E6" }}
              >
                <p style={{ color: "#999999" }}>Nenhum projeto encontrado com os filtros selecionados.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-l-4"
                    style={{ borderLeftColor: "#EE7501" }}
                  >
                    {/* Header Card */}
                    <div
                      className="p-6 border-b border-gray-100"
                      style={{ backgroundColor: "#FAFAF9" }}
                    >
                      <h3 className="text-lg font-bold mb-2" style={{ color: "#1A1A1A" }}>
                        {project.projeto}
                      </h3>
                      <p className="text-sm" style={{ color: "#666666" }}>
                        {project.empreendimento}
                      </p>
                    </div>

                    {/* Conteúdo Card */}
                    <div className="p-6 space-y-4">
                      {/* Tipo */}
                      <div className="flex items-start gap-3">
                        <Briefcase className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#EE7501" }} />
                        <div>
                          <p className="text-xs font-semibold uppercase" style={{ color: "#999999" }}>
                            Tipo
                          </p>
                          <p className="text-sm" style={{ color: "#1A1A1A" }}>
                            {project.tipo}
                          </p>
                        </div>
                      </div>

                      {/* Localização */}
                      {project.locais.length > 0 && (
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#2C7EB3" }} />
                          <div>
                            <p className="text-xs font-semibold uppercase" style={{ color: "#999999" }}>
                              Localização
                            </p>
                            <p className="text-sm" style={{ color: "#1A1A1A" }}>
                              {project.locais.map((l) => `${l.municipio || "N/A"} - ${l.estado}`).join(", ")}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Coordenadores */}
                      {project.coordenadores.length > 0 && (
                        <div className="flex items-start gap-3">
                          <Users className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#861720" }} />
                          <div>
                            <p className="text-xs font-semibold uppercase" style={{ color: "#999999" }}>
                              Coordenador{project.coordenadores.length > 1 ? "es" : ""}
                            </p>
                            <p className="text-sm" style={{ color: "#1A1A1A" }}>
                              {project.coordenadores.slice(0, 2).join(", ")}
                              {project.coordenadores.length > 2 && ` +${project.coordenadores.length - 2}`}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Ano */}
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#FFD700" }} />
                        <div>
                          <p className="text-xs font-semibold uppercase" style={{ color: "#999999" }}>
                            Ano
                          </p>
                          <p className="text-sm" style={{ color: "#1A1A1A" }}>
                            {project.ano}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Footer Card */}
                    <div
                      className="px-6 py-4 flex items-center justify-between border-t border-gray-100"
                      style={{ backgroundColor: "#FAFAF9" }}
                    >
                      <span className="text-xs font-semibold uppercase" style={{ color: "#999999" }}>
                        {project.tipo_autorizacao}
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: "#EE7501", color: "#FFFFFF" }}>
                        {project.nivel}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
