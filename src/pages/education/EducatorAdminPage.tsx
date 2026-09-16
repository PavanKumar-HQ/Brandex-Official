import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Plus,
  Tv,
  HelpCircle,
  Layers,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Search,
  ExternalLink,
  Edit,
  Trash2,
  Eye,
  Lock,
  ArrowLeft,
  GraduationCap,
  BarChart3,
  Award,
} from "lucide-react";
import { CURRICULUM_DATA, Lesson } from "@/lib/curriculum-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function EducatorAdminPage() {
  const [activeTab, setActiveTab] = useState<"content" | "quizzes" | "classes">("content");
  const [filterClass, setFilterClass] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Lesson form state
  const [formTitle, setFormTitle] = useState("");
  const [formYoutubeUrl, setFormYoutubeUrl] = useState("");
  const [formDuration, setFormDuration] = useState("12:00");
  const [formClass, setFormClass] = useState("class-8");
  const [formSubject, setFormSubject] = useState("science");
  const [formChapter, setFormChapter] = useState("Microorganisms");

  // Calculate platform stats
  const totalClasses = CURRICULUM_DATA.length;
  const totalSubjects = CURRICULUM_DATA.reduce((sum, c) => sum + c.subjects.length, 0);
  const totalChapters = CURRICULUM_DATA.reduce(
    (sum, c) => sum + c.subjects.reduce((sSum, s) => sSum + s.chapters.length, 0),
    0
  );

  // Flatten lessons
  const allLessons: Array<{
    lesson: Lesson;
    className: string;
    classId: string;
    subjectName: string;
    chapterTitle: string;
  }> = [];

  CURRICULUM_DATA.forEach((c) => {
    c.subjects.forEach((s) => {
      s.chapters.forEach((ch) => {
        ch.topics.forEach((t) => {
          t.lessons.forEach((l) => {
            allLessons.push({
              lesson: l,
              className: c.name,
              classId: c.slug,
              subjectName: s.name,
              chapterTitle: ch.title,
            });
          });
        });
      });
    });
  });

  const filteredLessons = allLessons.filter((item) => {
    if (filterClass !== "all" && item.classId !== filterClass) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        item.lesson.title.toLowerCase().includes(q) ||
        item.subjectName.toLowerCase().includes(q) ||
        item.chapterTitle.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#f8fafd] pt-24 pb-16 lg:pt-28 lg:pb-20 selection:bg-[#4f47e6] selection:text-white">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-10">
        
        {/* Navigation & Header */}
        <div className="border-b border-slate-200/90 pb-8 space-y-4">
          <div className="flex items-center gap-3">
            <Link
              to="/education"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#4f47e6] transition-colors bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Education Home</span>
            </Link>
            <Link
              to="/education/classroom"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#4f47e6] transition-colors bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-2xs"
            >
              <span>Classroom Theater</span>
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#4f47e6] transition-colors bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-2xs"
            >
              <span>Main Website</span>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-2">
            <div className="space-y-1.5">
              <div className="liquid-glass-pill inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold text-[#4f47e6] mb-1">
                <Shield className="w-3.5 h-3.5 text-[#4f47e6]" />
                <span>Educator Administration Console</span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Curriculum & Smartboard Manager
              </h1>
              <p className="text-sm sm:text-base text-slate-600 font-normal">
                Manage Karnataka State Board classroom lessons, smartboard video embeds, and formative quizzes.
              </p>
            </div>

            <Button
              onClick={() => setIsAddModalOpen(true)}
              variant="brand"
              size="default"
              className="rounded-xl flex items-center gap-2 font-bold shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Lesson</span>
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="liquid-glass-card rounded-2xl p-5 border border-slate-200 space-y-1">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-mono uppercase font-bold">Standard Grades</span>
              <GraduationCap className="w-4 h-4 text-[#4f47e6]" />
            </div>
            <div className="font-display text-3xl font-extrabold text-slate-900">{totalClasses}</div>
            <p className="text-[11px] text-slate-500">Classes 6, 7, 8, 9, 10 Mapped</p>
          </div>

          <div className="liquid-glass-card rounded-2xl p-5 border border-slate-200 space-y-1">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-mono uppercase font-bold">Total Subjects</span>
              <Layers className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="font-display text-3xl font-extrabold text-slate-900">{totalSubjects}</div>
            <p className="text-[11px] text-slate-500">Science, Maths, Social & English</p>
          </div>

          <div className="liquid-glass-card rounded-2xl p-5 border border-slate-200 space-y-1">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-mono uppercase font-bold">Active Chapters</span>
              <BookOpen className="w-4 h-4 text-amber-600" />
            </div>
            <div className="font-display text-3xl font-extrabold text-slate-900">{totalChapters}</div>
            <p className="text-[11px] text-slate-500">Verified Textbook Chapters</p>
          </div>

          <div className="liquid-glass-card rounded-2xl p-5 border border-slate-200 space-y-1">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-mono uppercase font-bold">Total Video Lessons</span>
              <Tv className="w-4 h-4 text-purple-600" />
            </div>
            <div className="font-display text-3xl font-extrabold text-slate-900">{allLessons.length}</div>
            <p className="text-[11px] text-slate-500">Smartboard Ready Streams</p>
          </div>
        </div>

        {/* Lesson Table & Filters */}
        <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {["all", "class-6", "class-7", "class-8", "class-9", "class-10"].map((cId) => (
                <button
                  key={cId}
                  onClick={() => setFilterClass(cId)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    filterClass === cId
                      ? "bg-[#4f47e6] text-white shadow-2xs"
                      : "bg-white border border-slate-200 text-slate-700 hover:text-slate-900"
                  }`}
                >
                  {cId === "all" ? "All Grades" : `Class ${cId.replace("class-", "")}`}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search lessons..."
                className="pl-9 h-9 text-xs bg-white rounded-xl border-slate-200"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono uppercase text-[10px]">
                <tr>
                  <th className="p-3.5 pl-4">Lesson Title</th>
                  <th className="p-3.5">Grade & Subject</th>
                  <th className="p-3.5">Chapter</th>
                  <th className="p-3.5">Duration</th>
                  <th className="p-3.5 text-right pr-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredLessons.slice(0, 15).map((row) => (
                  <tr key={row.lesson.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-3.5 pl-4 font-bold text-slate-900 flex items-center gap-2">
                      <Tv className="w-3.5 h-3.5 text-[#4f47e6]" />
                      <span>{row.lesson.title}</span>
                    </td>
                    <td className="p-3.5 text-slate-600">
                      <span className="font-semibold text-slate-900">{row.className}</span> &bull; {row.subjectName}
                    </td>
                    <td className="p-3.5 text-slate-600 max-w-[200px] truncate">{row.chapterTitle}</td>
                    <td className="p-3.5 font-mono text-slate-500">{row.lesson.duration || "15:00"}</td>
                    <td className="p-3.5 text-right pr-4">
                      <Button asChild variant="outline" size="sm" className="h-7 text-[11px] px-2.5 rounded-lg">
                        <Link to={`/education/classroom?class=${row.classId}`}>
                          <Eye className="w-3 h-3 mr-1" />
                          <span>View</span>
                        </Link>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
