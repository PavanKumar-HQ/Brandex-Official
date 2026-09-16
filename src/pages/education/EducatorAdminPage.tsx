import { useState } from "react";
import { Link, useParams } from 'react-router-dom';
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
  Sparkles,
  Lock,
} from "lucide-react";
import { CURRICULUM_DATA, Lesson } from "@/education/lib/curriculum-data";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<"content" | "quizzes" | "classes">("content");
  const [filterClass, setFilterClass] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Lesson form state
  const [formTitle, setFormTitle] = useState("");
  const [formYoutubeUrl, setFormYoutubeUrl] = useState("");
  const [formDuration, setFormDuration] = useState("12:00");
  const [formClass, setFormClass] = useState("class-8");
  const [formSubject, setFormSubject] = useState("science");
  const [formChapter, setFormChapter] = useState("Microorganisms");
  const [formDescription, setFormDescription] = useState("");

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
              classId: c.id,
              subjectName: s.name,
              chapterTitle: `Ch ${ch.chapterNumber}: ${ch.title}`,
            });
          });
        });
      });
    });
  });

  const totalPublishedLessons = allLessons.filter((l) => l.lesson.status === "PUBLISHED").length;
  const totalQuizzes = allLessons.filter((l) => !!l.lesson.quiz).length;

  const filteredLessons = allLessons.filter((item) => {
    const matchesClass = filterClass === "all" || item.classId === filterClass;
    const matchesSearch =
      searchQuery === "" ||
      item.lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subjectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.chapterTitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesClass && matchesSearch;
  });

  const extractYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const handleAddLesson = (e: React.FormEvent) => {
    e.preventDefault();
    const videoId = extractYoutubeId(formYoutubeUrl) || "k3_9zQ9f7gM";
    alert(`Lesson "${formTitle}" successfully registered with YouTube ID [${videoId}]!`);
    setIsAddModalOpen(false);
    setFormTitle("");
    setFormYoutubeUrl("");
    setFormDescription("");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-slate-950 text-white rounded-2xl shadow-xl border border-slate-800">
          <div className="flex items-center gap-3.5">
            <div className="p-3 bg-blue-600 rounded-xl text-white shadow-md">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-300 bg-blue-900/50 px-2 py-0.5 rounded border border-blue-700/60">
                  INTERNAL ACCESS
                </span>
                <span className="text-xs text-slate-400">Brandex CMS v1.0.0</span>
              </div>
              <h1 className="text-xl font-bold text-white mt-1">Brandex Content Management Studio</h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/"
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-xl border border-slate-700 transition-colors"
            >
              Back to Public App
            </Link>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-lg shadow-blue-600/30"
            >
              <Plus className="w-4 h-4" /> Add New Video Lesson
            </button>
          </div>
        </div>

        {/* Snapshot Statistics Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
            <span className="text-xs font-medium text-slate-400 block font-mono">Total Classes</span>
            <span className="text-2xl font-black text-slate-900 mt-1 block font-mono">
              {totalClasses}
            </span>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
            <span className="text-xs font-medium text-slate-400 block font-mono">Subjects</span>
            <span className="text-2xl font-black text-slate-900 mt-1 block font-mono">
              {totalSubjects}
            </span>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
            <span className="text-xs font-medium text-slate-400 block font-mono">Chapters</span>
            <span className="text-2xl font-black text-slate-900 mt-1 block font-mono">
              {totalChapters}
            </span>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
            <span className="text-xs font-medium text-slate-400 block font-mono">Video Lessons</span>
            <span className="text-2xl font-black text-blue-600 mt-1 block font-mono">
              {totalPublishedLessons}
            </span>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm col-span-2 sm:col-span-1">
            <span className="text-xs font-medium text-slate-400 block font-mono">Predefined Quizzes</span>
            <span className="text-2xl font-black text-emerald-600 mt-1 block font-mono">
              {totalQuizzes}
            </span>
          </div>
        </div>

        {/* Main Content Management Area */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden space-y-4 p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Curriculum Video Catalog</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Manage YouTube video IDs, syllabus mappings, and predefined quiz statuses.
              </p>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Filter lessons..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 w-48"
                />
              </div>

              <select
                value={filterClass}
                onChange={(e) => setFilterClass(e.target.value)}
                className="bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 rounded-lg px-3 py-1.5 focus:outline-none"
              >
                <option value="all">All Grades</option>
                {CURRICULUM_DATA.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-400 font-mono uppercase text-[10px] border-b border-slate-100">
                <tr>
                  <th className="py-3 px-4">Lesson Details</th>
                  <th className="py-3 px-4">Class &amp; Subject</th>
                  <th className="py-3 px-4">Chapter</th>
                  <th className="py-3 px-4">YouTube ID</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Quiz</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredLessons.map(({ lesson, className, subjectName, chapterTitle }) => (
                  <tr key={lesson.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-slate-900">{lesson.title}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{lesson.duration}</div>
                    </td>
                    <td className="py-3.5 px-4 font-medium text-slate-700">
                      <div>{className}</div>
                      <div className="text-slate-400">{subjectName}</div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 truncate max-w-xs">
                      {chapterTitle}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-blue-600 font-semibold">
                      {lesson.youtubeId}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                        {lesson.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      {lesson.quiz ? (
                        <span className="text-emerald-600 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Ready
                        </span>
                      ) : (
                        <span className="text-slate-300">None</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <div className="inline-flex items-center gap-2">
                        <Link to={`/lesson/${lesson.slug}`}
                          className="p-1 text-slate-400 hover:text-blue-600"
                          title="Preview Lesson"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Lesson Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
            onClick={() => setIsAddModalOpen(false)}
          />
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 p-6 space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Add New Video Lesson</h3>
            <p className="text-xs text-slate-500">
              Provide a YouTube URL to index an educational lesson into the Brandex syllabus.
            </p>

            <form onSubmit={handleAddLesson} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Lesson Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Structure of the Atom & Bohr's Model"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">YouTube Video URL / ID</label>
                <input
                  type="text"
                  required
                  placeholder="https://www.youtube.com/watch?v=..."
                  value={formYoutubeUrl}
                  onChange={(e) => setFormYoutubeUrl(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Grade Level</label>
                  <select
                    value={formClass}
                    onChange={(e) => setFormClass(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none"
                  >
                    {CURRICULUM_DATA.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Subject</label>
                  <input
                    type="text"
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Lesson Overview</label>
                <textarea
                  rows={3}
                  placeholder="Brief synopsis of core concepts explained in this video lesson..."
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-blue-950 hover:bg-blue-900 text-white font-bold transition-colors shadow-sm"
                >
                  Publish Lesson
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
