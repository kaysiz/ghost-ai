"use client";

import { Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export const PROJECT_SIDEBAR_ID = "project-sidebar";

type ProjectSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      id={PROJECT_SIDEBAR_ID}
      aria-label="Projects"
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={cn(
        "fixed top-12 bottom-0 left-0 z-40 flex w-72 max-w-[calc(100vw-2rem)] flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground shadow-lg transition-transform duration-200 ease-out motion-reduce:transition-none",
        isOpen ? "translate-x-0" : "pointer-events-none -translate-x-full",
      )}
    >
      <div className="flex h-12 shrink-0 items-center justify-between gap-2 border-b border-sidebar-border px-3">
        <h2 className="text-sm font-medium">Projects</h2>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-label="Close"
          onClick={onClose}
        >
          <X />
        </Button>
      </div>

      <Tabs
        defaultValue="my-projects"
        className="min-h-0 flex-1 gap-3 px-3 py-3"
      >
        <TabsList className="w-full">
          <TabsTrigger value="my-projects" className="flex-1">
            My Projects
          </TabsTrigger>
          <TabsTrigger value="shared" className="flex-1">
            Shared
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="my-projects"
          className="flex items-center justify-center text-muted-foreground"
        >
          No projects yet.
        </TabsContent>
        <TabsContent
          value="shared"
          className="flex items-center justify-center text-muted-foreground"
        >
          No shared projects yet.
        </TabsContent>
      </Tabs>

      <div className="shrink-0 border-t border-sidebar-border p-3">
        <Button type="button" className="w-full">
          <Plus data-icon="inline-start" />
          New Project
        </Button>
      </div>
    </aside>
  );
}
