import type { CaseStudySlug } from "@/content/case-studies";
import {
  AskTaDesktopMock,
  AskTaMobileMock,
  FormatDeskDesktopMock,
  FormatDeskMobileMock,
  PlaybookDesktopMock,
  PlaybookMobileMock,
} from "@/components/mocks/MockUIs";

export function CaseStudyDesktopMock({ slug }: { slug: CaseStudySlug }) {
  switch (slug) {
    case "playbook":
      return <PlaybookDesktopMock />;
    case "ask-ta":
      return <AskTaDesktopMock />;
    case "format-desk":
      return <FormatDeskDesktopMock />;
  }
}

export function CaseStudyMobileMock({ slug }: { slug: CaseStudySlug }) {
  switch (slug) {
    case "playbook":
      return <PlaybookMobileMock />;
    case "ask-ta":
      return <AskTaMobileMock />;
    case "format-desk":
      return <FormatDeskMobileMock />;
  }
}
