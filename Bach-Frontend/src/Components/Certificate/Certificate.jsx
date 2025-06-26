import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Music, Award, Star, Download, Sparkles } from "lucide-react";

const Certificate = ({ nombreUsuario = "Usuario", nombreCurso = "Curso Desconocido" }) => {
    const generarPDF = async () => {
        const input = document.getElementById("certificado");
        if (!input) return;

        try {
            const canvas = await html2canvas(input, {
                scale: 2,
                useCORS: true,
                backgroundColor: "#ffffff",
                allowTaint: true,
                foreignObjectRendering: false,
            });

            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF({
                orientation: "landscape",
                unit: "px",
                format: [canvas.width, canvas.height],
            });

            pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
            pdf.save(`certificado-${nombreUsuario.replace(/\s+/g, "-").toLowerCase()}.pdf`);
        } catch (error) {
            console.error("Error generando PDF:", error);
        }
    };

    return (
        <div
            className="flex flex-col items-center justify-center py-10 px-4 min-h-screen"
            style={{ background: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)" }}
        >
            <div
                id="certificado"
                className="w-[900px] h-[650px] bg-white shadow-2xl rounded-2xl overflow-hidden relative"
                style={{ backgroundColor: "#ffffff" }}
            >
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 50%, #4338ca 100%)",
                    }}
                ></div>

                <div
                    className="absolute inset-4 rounded-xl"
                    style={{ border: "4px solid #7c3aed" }}
                >
                    <div
                        className="absolute inset-0 rounded-lg opacity-10"
                        style={{ background: "linear-gradient(90deg, #7c3aed 0%, #2563eb 100%)" }}
                    ></div>
                </div>

                {/* Decoraciones de esquinas */}
                {["top-6 left-6", "top-6 right-6", "bottom-6 left-6", "bottom-6 right-6"].map((pos, i) => (
                    <div
                        key={i}
                        className={`absolute ${pos} opacity-20`}
                        style={{ color: i % 2 === 0 ? "#7c3aed" : "#2563eb" }}
                    >
                        <Sparkles size={32} />
                    </div>
                ))}

                {/* Header */}
                <div className="absolute top-8 left-8 flex items-center gap-3">
                    <div
                        className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg"
                        style={{ background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)" }}
                    >
                        <Music className="text-white" size={24} />
                    </div>
                    <div>
                        <h1
                            className="text-2xl font-bold"
                            style={{
                                background: "linear-gradient(90deg, #7c3aed 0%, #2563eb 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Bach Academy
                        </h1>
                        <p className="text-sm font-medium" style={{ color: "#6b7280" }}>
                            Plataforma de Educación Musical
                        </p>
                    </div>
                </div>

                {/* Verificado */}
                <div
                    className="absolute top-8 right-8 flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                    style={{
                        background: "linear-gradient(90deg, #7c3aed 0%, #2563eb 100%)",
                    }}
                >
                    <Award size={16} />
                    VERIFICADO
                </div>

                {/* Contenido principal */}
                <div className="flex flex-col items-center justify-center h-full px-16 text-center">
                    <h2
                        className="text-5xl font-bold mb-2"
                        style={{
                            background: "linear-gradient(90deg, #7c3aed 0%, #2563eb 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Certificado de Excelencia
                    </h2>
                    <div className="w-32 h-1 mx-auto rounded-full" style={{ background: "#7c3aed" }}></div>

                    <p className="text-lg mb-4 font-medium" style={{ color: "#374151" }}>
                        Se certifica que
                    </p>

                    <h3 className="text-4xl font-bold mb-2 relative z-10" style={{ color: "#1f2937" }}>
                        {nombreUsuario}
                    </h3>
                    <div
                        className="absolute bottom-0 left-1/2 w-full h-0.5 opacity-30"
                        style={{
                            transform: "translateX(-50%)",
                            background: "linear-gradient(90deg, #7c3aed 0%, #2563eb 100%)",
                        }}
                    ></div>

                    <p className="text-lg mb-4 max-w-2xl leading-relaxed" style={{ color: "#374151" }}>
                        ha completado satisfactoriamente el curso musical
                    </p>

                    <div
                        className="mb-8 p-6 rounded-xl shadow-lg"
                        style={{
                            background: "linear-gradient(90deg, #7c3aed 0%, #2563eb 100%)",
                        }}
                    >
                        <h4 className="text-2xl font-bold text-white">"{nombreCurso}"</h4>
                    </div>

                    <div className="flex gap-2 mb-6">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={20} className="fill-current" style={{ color: "#fbbf24" }} />
                        ))}
                    </div>

                    <p className="mb-8 max-w-2xl" style={{ color: "#6b7280" }}>
                        demostrando dedicación, talento y dominio en conceptos musicales. Este logro refleja
                        práctica constante, pasión por el arte y un compromiso con la excelencia.
                    </p>
                </div>

                {/* Footer */}
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                    <div className="text-center">
                        <div className="w-48 mb-2" style={{ borderTop: "2px solid #9ca3af" }}></div>
                        <p className="text-sm font-semibold" style={{ color: "#374151" }}>Dra. Elena Rodríguez</p>
                        <p className="text-xs" style={{ color: "#6b7280" }}>Directora Académica</p>
                    </div>

                    <div className="text-center">
                        <div
                            className="flex items-center justify-center w-16 h-16 rounded-full mb-2 shadow-lg"
                            style={{ background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)" }}
                        >
                            <Award className="text-white" size={24} />
                        </div>
                        <p className="text-xs font-semibold" style={{ color: "#6b7280" }}>
                            Sello Oficial
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-48 mb-2" style={{ borderTop: "2px solid #9ca3af" }}></div>
                        <p className="text-sm font-semibold" style={{ color: "#374151" }}>
                            {new Date().toLocaleDateString("es-CO", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
                        <p className="text-xs" style={{ color: "#6b7280" }}>Fecha de Finalización</p>
                    </div>
                </div>

                <div className="absolute bottom-2 left-1/2" style={{ transform: "translateX(-50%)" }}>
                    <p className="text-xs" style={{ color: "#9ca3af" }}>
                        Certificado ID: BACH-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                    </p>
                </div>
            </div>

            <button
                onClick={generarPDF}
                className="mt-8 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3"
                style={{
                    background: "linear-gradient(90deg, #7c3aed 0%, #2563eb 100%)",
                }}
            >
                <Download size={20} />
                Descargar Certificado
            </button>

            <div className="mt-6 text-center max-w-md">
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                    Este certificado puede verificarse en línea. Comparte tu logro con confianza:
                    ¡tu educación musical está respaldada por Bach!
                </p>
            </div>
        </div>
    );
};

export default Certificate;
