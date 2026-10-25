import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "@/lib/data";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project Not Found | Oudenani" };
  }

  return {
    title: `${project.title} | Oudenani`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 pb-24 pt-28">
      <article className="mx-auto max-w-5xl">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-sky-500 dark:text-slate-400"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-600 dark:border-sky-900 dark:bg-sky-950/50 dark:text-sky-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
              {project.title}
            </h1>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-600"
            >
              <ExternalLink size={16} />
              Live demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-sky-500 hover:text-sky-500 dark:border-slate-700 dark:text-slate-200"
            >
              <Github size={16} />
              Source code
            </a>
          </div>
        </div>

        <div className="relative mb-10 aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl dark:border-slate-800 dark:bg-slate-900">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>

        <section className="max-w-3xl">
          <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
            About this project
          </h2>
          <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
            {project.description}
          </p>
        </section>
      </article>
    </main>
  );
}
