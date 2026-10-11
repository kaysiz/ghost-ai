"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { PROJECT_SIDEBAR_ID } from "@/components/editor/project-sidebar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type EditorNavbarProps = {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
  className?: string;
};

export function EditorNavbar({
  sidebarOpen,
  onToggleSidebar,
  className,
}: EditorNavbarProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-30 grid h-12 shrink-0 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center border-b border-border bg-background px-2",
        className,
      )}
    >
      <div data-slot="editor-navbar-left" className="flex items-center">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
          aria-expanded={sidebarOpen}
          aria-controls={PROJECT_SIDEBAR_ID}
          onClick={onToggleSidebar}
        >
          {sidebarOpen ? <PanelLeftClose /> : <PanelLeftOpen />}
        </Button>
      </div>
      <div data-slot="editor-navbar-center" className="flex items-center justify-center" />
      <div data-slot="editor-navbar-right" className="flex items-center justify-end" />
    </header>
  );
}
