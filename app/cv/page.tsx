"use client"

import { Download, ZoomIn, ZoomOut, RotateCcw, Search, ChevronUp, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function CVPage() {
  const [zoom, setZoom] = useState(100)
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 4

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 25, 200))
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 25, 50))

  const handleDownload = () => {
    try {
      console.log("[v0] Starting PDF download process")

      // Create a new window with the CV content
      const printWindow = window.open("", "_blank")
      if (!printWindow) {
        console.error("[v0] Failed to open print window")
        return
      }

      const cvContent = document.querySelector(".cv-content")?.innerHTML || ""

      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Fantahun Bogale Gereme - CV</title>
          <meta charset="utf-8">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.5;
              color: #1f2937;
              background: white;
              padding: 20px;
            }
            .cv-content { 
              max-width: 210mm; 
              margin: 0 auto; 
              background: white;
            }
            h1 { font-size: 24px; font-weight: bold; margin-bottom: 8px; }
            h2 { font-size: 18px; font-weight: bold; margin: 16px 0 8px 0; }
            h3 { font-size: 14px; font-weight: bold; margin-bottom: 4px; }
            p { font-size: 12px; margin-bottom: 4px; }
            .text-center { text-align: center; }
            .border-b-2 { border-bottom: 2px solid #1f2937; padding-bottom: 16px; }
            .grid { display: grid; }
            .grid-cols-2 { grid-template-columns: 1fr 1fr; }
            .gap-8 { gap: 32px; }
            .space-y-8 > * + * { margin-top: 32px; }
            .space-y-4 > * + * { margin-top: 16px; }
            .space-y-3 > * + * { margin-top: 12px; }
            .space-y-2 > * + * { margin-top: 8px; }
            .mb-2 { margin-bottom: 8px; }
            .mb-3 { margin-bottom: 12px; }
            .mb-4 { margin-bottom: 16px; }
            .mt-1 { margin-top: 4px; }
            .mt-4 { margin-top: 16px; }
            .text-sm { font-size: 12px; }
            .text-xs { font-size: 10px; }
            .text-lg { font-size: 16px; }
            .text-xl { font-size: 18px; }
            .text-3xl { font-size: 24px; }
            .font-bold { font-weight: bold; }
            .font-medium { font-weight: 500; }
            .leading-relaxed { line-height: 1.6; }
            .flex { display: flex; }
            .justify-between { justify-content: space-between; }
            .items-start { align-items: flex-start; }
            .text-left { text-align: left; }
            .text-gray-600 { color: #6b7280; }
            .text-gray-700 { color: #374151; }
            .text-gray-800 { color: #1f2937; }
            .text-gray-900 { color: #111827; }
            @page { size: A4; margin: 1in; }
            @media print {
              body { margin: 0; padding: 0; }
              .cv-content { padding: 0; }
            }
          </style>
        </head>
        <body>
          <div class="cv-content">
            ${cvContent}
          </div>
          <script>
            window.onload = function() {
              // Auto-trigger print dialog which allows saving as PDF
              setTimeout(() => {
                window.print();
                // Close the window after printing
                setTimeout(() => {
                  window.close();
                }, 1000);
              }, 500);
            }
          </script>
        </body>
        </html>
      `

      printWindow.document.write(htmlContent)
      printWindow.document.close()

      console.log("[v0] PDF download window opened successfully")
    } catch (error) {
      console.error("[v0] Error generating PDF:", error)
      // Fallback to simple print
      window.print()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-light text-gray-900 mb-2">CV</h1>
          <p className="text-gray-600 italic">My Curriculum Vitae</p>
        </div>

        {/* PDF Viewer Container */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* PDF Toolbar */}
          <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="h-8 px-2">
                <Search className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 px-2" onClick={handleZoomOut}>
                <ZoomOut className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 px-2" onClick={handleZoomIn}>
                <ZoomIn className="w-4 h-4" />
              </Button>
              <div className="flex items-center space-x-1 text-sm">
                <input
                  type="text"
                  value={currentPage}
                  onChange={(e) =>
                    setCurrentPage(Math.max(1, Math.min(totalPages, Number.parseInt(e.target.value) || 1)))
                  }
                  className="w-8 text-center border border-gray-300 rounded px-1 py-0.5"
                />
                <span className="text-gray-600">of {totalPages}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <select
                className="text-sm border border-gray-300 rounded px-2 py-1"
                value={`${zoom}%`}
                onChange={(e) => setZoom(Number.parseInt(e.target.value))}
              >
                <option value="50">50%</option>
                <option value="75">75%</option>
                <option value="100">100%</option>
                <option value="125">125%</option>
                <option value="150">150%</option>
                <option value="200">200%</option>
              </select>
              <Button variant="ghost" size="sm" className="h-8 px-2">
                <ChevronUp className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 px-2">
                <ChevronDown className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 px-2">
                <RotateCcw className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 px-2" onClick={handleDownload}>
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* PDF Content Area */}
          <div className="bg-gray-200 p-8 min-h-[800px] overflow-y-auto flex justify-center">
            <div
              className="bg-white shadow-lg max-w-4xl w-full p-12 min-h-full cv-content"
              style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top center" }}
            >
              {/* CV Content */}
              <div className="space-y-8">
                {/* Header */}
                <div className="text-center border-b-2 border-gray-900 pb-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">FANTAHUN BOGALE GEREME</h1>
                  <p className="text-lg text-gray-700 mb-4">
                    Assistant Professor | AI Researcher | Intelligent Data-driven Decisioning Expert
                  </p>
                  <div className="grid grid-cols-2 gap-8 text-sm">
                    <div className="text-left">
                      <h3 className="font-bold text-gray-900 mb-2">DETAILS</h3>
                      <p>Woreda -1, Nefas Silk Lafto Sub City</p>
                      <p>Addis Ababa, Ethiopia</p>
                      <p>+251 912 07 11 04</p>
                      <p>fantishb@gmail.com</p>
                      <p>https://sites.google.com/view/fantahunbg/home</p>
                      <p>http://linkedin.com/in/fantahun-bogale-gereme-dr-ing-17390578</p>
                      <p>https://orcid.org/0000-0003-4766-9986</p>
                      <p>Gender: Male | DoB: 1984 | Ethiopian</p>
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-gray-900 mb-2">LANGUAGES</h3>
                      <p>• Amharic</p>
                      <p>• English</p>

                      <h3 className="font-bold text-gray-900 mb-2 mt-4">SKILLS</h3>
                      <p>• Communication</p>
                      <p>• Academic Leadership</p>
                      <p>• Industrial Team leadership</p>
                      <p>• Critical thinking, analytical skills</p>
                      <p>• Data analytics and visualization</p>
                      <p>• Programming: Python, Java, C++, SQL</p>
                      <p>• ML Techniques: Supervised/unsupervised learning, DL, CV, NLP</p>
                      <p>• AI/ML Frameworks: TensorFlow, PyTorch, Keras, Scikit-learn</p>
                      <p>
                        • ML Algorithms: Logistic Regression, Decision Tree, Random Forest, CNNs, RNNs, Transformers
                      </p>
                      <p>• Cloud Platforms: AWS, Google Cloud</p>
                      <p>• AI Model development, evaluation, deployment</p>

                      <h3 className="font-bold text-gray-900 mb-2 mt-4">CERTIFICATIONS</h3>
                      <p>• CCNA</p>
                      <p>• CCNAS (CCNA Security)</p>
                      <p>• Microsoft Certified: MCITP</p>
                      <p>• Mail and Exchange Server</p>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">SUMMARY</h2>
                  <p className="text-sm leading-relaxed text-gray-800">
                    Assistant Professor | AI Researcher | Intelligent Data-driven Decisioning Expert | Principal Data
                    Scientist with a strong background in academia-industry collaboration. Teaching and practicing AI in
                    the academia and industry like FinTech, AgTech, and AI policy. Proficient in Python, Java, and C++,
                    and experienced in leading research initiatives and data science teams. Holding a PhD in Computer
                    Science & Technology (AI), MSc and BSc in Computer Science & IT, and an LLB, I offer a unique blend
                    of technical, legal, and ethical insights to drive real-world AI innovation.
                  </p>
                </div>

                {/* Experience */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">EXPERIENCE - Academic & Industry</h2>
                  <div className="space-y-4 text-sm">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold">
                          Assistant Professor of CS (AI) and Researcher | Dean/Head of School
                        </h3>
                        <span className="text-gray-600">10-11-2022 – present</span>
                      </div>
                      <p className="font-medium text-gray-700">Addis Ababa University, CTBE, SiTE, AI Chair</p>
                      <p className="text-gray-800 leading-relaxed mt-1">
                        Leading the school; Teaching Pg and Ug Artificial Intelligence (AI) related courses like Machine
                        Learning, Deep Learning, Natural Language Processing, Computer Vision; developing instructional
                        goals and specific instructional objectives; initiating, planning and managing projects;
                        providing consultancy services; preparing teaching materials, assessment tools and assessing
                        students; planning and conducting researches; curriculum development and review; supervising
                        graduating students; participating in community services; paper review tasks in international
                        journals and conferences.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold">Lecturer of Computer Science and SE</h3>
                        <span className="text-gray-600">23-09-2016 – 01-07-2017</span>
                      </div>
                      <p className="font-medium text-gray-700">
                        Bahir Dar University, Bahir Dar Institute of Technology
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold">Lecturer of Computer Science, IT & IS</h3>
                        <span className="text-gray-600">03-11-2015 – 22-09-2016</span>
                      </div>
                      <p className="font-medium text-gray-700">Debre Berhan University</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold">
                          Department Head, Lecturer of Computer Science, & Higher Diploma Program (HDP) Moderator
                        </h3>
                        <span className="text-gray-600">14-09-2009 – 03-11-2015</span>
                      </div>
                      <p className="font-medium text-gray-700">Dilla University</p>
                      <p className="text-gray-800 leading-relaxed mt-1">
                        Leading the department; moderating satellite universities and colleges in HDP program; Teaching
                        theoretical as well as practical CS courses; Developing instructional goals and specific
                        instructional objectives; Initiating, planning and managing projects; Providing Consultancy
                        Services; Preparing teaching materials, assessment tools and assessing students; Planning and
                        conducting research; Curriculum development, and review; Advising graduating students, other on
                        demand tasks.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold">System Automation Team Leader and IT Instructor</h3>
                        <span className="text-gray-600">04-09-2006 – 14-09-2009</span>
                      </div>
                      <p className="font-medium text-gray-700">Ethio-Limat Company/Micro Business College</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold">
                          Intelligent Data-driven Decisioning Consultant | Principal Data Scientist
                        </h3>
                        <span className="text-gray-600">2024 – 2025</span>
                      </div>
                      <p className="font-medium text-gray-700">Kifiya Financial Technology, Addis Ababa, Ethiopia</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold">National AI Strategy Development Consultant</h3>
                        <span className="text-gray-600">2024-2025</span>
                      </div>
                      <p className="font-medium text-gray-700">
                        Ethiopian Artificial Intelligence Institute, Addis Ababa, Ethiopia
                      </p>
                      <p className="text-gray-800 leading-relaxed mt-1">
                        As a consultant-developer of the national AI strategy, I contributed to the research and
                        formulation of key strategic issues aimed at advancing AI adoption across industries. I
                        collaborated with stakeholders to identify key priorities, ensuring alignment with national
                        goals for innovation, ethical AI use, and workforce development. This experience heightened my
                        awareness of the profound opportunities and emerging threats that AI has already introduced and
                        continues to shape, underscoring the critical need for strategic foresight.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold">System Automation Project Team Leader</h3>
                        <span className="text-gray-600">2006-2009</span>
                      </div>
                      <p className="font-medium text-gray-700">Ethio Limat Company</p>
                      <p className="text-gray-800 leading-relaxed mt-1">
                        As a SATL, I led a team of engineers & IT personnel to design and implement scalable automation
                        solutions.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold">Cofounder and Manager</h3>
                        <span className="text-gray-600">2006-2009</span>
                      </div>
                      <p className="font-medium text-gray-700">
                        Tonetor Cyberbizz and Ever New Solutions (IT & Software Development Startups), Addis Ababa,
                        Ethiopia
                      </p>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">EDUCATION</h2>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold">PhD in Computer Science and Technology (AI)</h3>
                        <span className="text-gray-600">01-07-2017 – 23-06-2021</span>
                      </div>
                      <p className="text-gray-700">
                        University of Electronic Science and Technology of China, Chengdu, China
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold">MSc Degree in Computer Science</h3>
                        <span className="text-gray-600">01-07-2011 – 16-07-2013</span>
                      </div>
                      <p className="text-gray-700">Osmania University, Hyderabad, India</p>
                    </div>
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold">LLB Degree in Law</h3>
                        <span className="text-gray-600">01-09-2007 – 08-07-2014</span>
                      </div>
                      <p className="text-gray-700">Unity University, Addis Ababa, Ethiopia</p>
                    </div>
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold">BSc Degree in Computer Science and Information Technology</h3>
                        <span className="text-gray-600">01-09-2003 – 08-07-2006</span>
                      </div>
                      <p className="text-gray-700">Haremaya (Alemaya) University, Ethiopia</p>
                    </div>
                  </div>
                </div>

                {/* Research Interest */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">RESEARCH INTEREST</h2>
                  <p className="text-sm text-gray-800">
                    Computational Intelligence: Time series analysis, Natural Language Processing, Data Analytics, Data
                    Mining, Text mining, Knowledge Extraction, Process Mining, Computer Vision, AI fairness,
                    multidisciplinary research.
                  </p>
                </div>

                {/* Projects */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">PROJECTS</h2>
                  <div className="space-y-2 text-sm">
                    <p>
                      • Intelligent Data-Driven Decisioning (Credit Scoring, Fraud Detection, Alternative Data Sourcing)
                    </p>
                    <p>• Ethiopian National Artificial Intelligence Strategy Development</p>
                    <p>
                      • An Artificial Intelligence Based Fake News Detection System and Resource Crafting for Low
                      Resourced Languages, University of Electronic Science and Technology of China.
                    </p>
                    <p>• A Computer Vision based item placement detector for UNILIVER at KFT.</p>
                    <p>• System Automation and Network Installation Project, Ethio Limat Company.</p>
                    <p>
                      • Psychosocial Software Engineering (a blend of Psychology, Social Works and Software
                      Engineering): A Five-Year PG training Project: Addis Ababa University
                    </p>
                  </div>
                </div>

                {/* Scholarships and Awards */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">SCHOLARSHIPS AND AWARDS</h2>
                  <div className="space-y-2 text-sm">
                    <p>• China Government Scholarship (CSC): awarded a full PhD scholarship</p>
                    <p>• Indian Government Scholarship: MSc</p>
                  </div>
                </div>

                {/* Selected Publications */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">SELECTED PUBLICATIONS</h2>
                  <div className="space-y-3 text-xs leading-relaxed">
                    <p>
                      <strong>Chala Bekabil, Fantahun Bogale.</strong> Enhancing Neural Machine Translation through
                      Incorporation of Unsupervised Language Understanding and Generation Techniques: The Case of
                      English-Afaan Oromo Translation. <em>Journal of SN Computer Science</em> (accepted for
                      publication)
                    </p>
                    <p>
                      <strong>Fantahun B. Gereme, and W. Zhu.</strong> Early Detection of Fake News "Before It Flies
                      High" [C]. In Proceedings of the 2nd International Conference on Big Data Technologies (ICBDT2019)
                      2019: p. 142-148.
                    </p>
                    <p>
                      <strong>Fantahun B. Gereme, and W. Zhu.</strong> Fighting fake news using deep learning:
                      Pre-trained word embeddings and the embedding layer investigated [C]. 2020 The 3rd International
                      Conference on Computational Intelligence and Intelligent Systems (CIIS 2020), 2020: p. 24-29.
                    </p>
                    <p>
                      <strong>Fantahun B. Gereme, W. Zhu, Tewodros A. Ayall, Dagmawi M. Alemu.</strong> Combating Fake
                      News in "Low-Resource" Languages: Amharic Fake News Detection Accompanied by Resource Crafting
                      [J]. <em>Information</em> 2021, 2021. 12(1): p. 20.
                    </p>
                    <p>
                      <strong>T Ayall, H Duan, C Liu, F.B. Gereme, M Deleli.</strong> OffStreamNG: Partial Stream Hybrid
                      Graph Edge Partitioning Based on Neighborhood Expansion and Greedy Heuristic[C]. European
                      Conference on Advances in Databases and Information Systems, 2020: p. 118-128
                    </p>
                    <p>
                      <strong>T Ayall, H Duan, C Liu, F.B. Gereme, M Deleli.</strong> Taking Heuristic Based Graph Edge
                      Partitioning One Step Ahead via OffStream Partitioning Approach. In 2021 IEEE 37th International
                      Conference on Data Engineering (ICDE), 2020
                    </p>
                    <p>
                      <strong>T Ayall, H Duan, C Liu, F.B. Gereme, M Deleli.</strong> Graph Computing Systems and
                      Partitioning Techniques: A Survey," in IEEE Access, vol. 10, pp. 118523-118550, 2022, doi:
                      10.1109/ACCESS.2022.3219422.
                    </p>
                  </div>
                </div>

                {/* Books */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">BOOKS</h2>
                  <p className="text-xs">
                    <strong>Fantahun Bogale Gereme,</strong> Fundamentals of Programming – I: A Handbook for Novices
                    (2017), available at https://www.amazon.com/Fundamentals-Programming-I-Handbook-Novice/dp/3330068949
                  </p>
                </div>

                {/* References */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">REFERENCES</h2>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h3 className="font-bold">Professor William Zhu</h3>
                      <p>University of Electronic Science and Technology of China, Chengdu, China</p>
                      <p>wfzhu@uestc.edu.cn</p>
                      <p>+86 159 2872 7490</p>
                    </div>
                    <div>
                      <h3 className="font-bold">Tewodros Alemu Ayall (PhD)</h3>
                      <p>Post-Doctoral Researcher (Computer Science)</p>
                      <p>Zhejiang Normal University, Zhejiang, China / Aberdeen, Scotland, UK</p>
                      <p>ayalltewodros@zjnu.cn / meettedy2123@gmail.com</p>
                    </div>
                    <div>
                      <h3 className="font-bold">Natnael Aragaw (PhD)</h3>
                      <p>Assistant Professor of CS(AI), AAU, AAiT</p>
                      <p>Chief AI & Technology Officer at Kifiya Financial Technologies</p>
                      <p>nargaw@kifiya.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-4 mt-12">
          <div className="max-w-7xl mx-auto px-6 text-center text-sm">© Copyright 2025 Fantahun Bogale-Gereme.</div>
        </footer>
      </div>
    </div>
  )
}
 