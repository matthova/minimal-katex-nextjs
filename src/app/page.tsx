"use client";

import React from "react";
import "katex/dist/katex.min.css";
import { MarkdownRenderer } from "@/components/markdown/markdown-renderer";

export default function Home() {
  return <MarkdownRenderer markdown={exampleLatex} />;
}

const exampleLatex =
  "Certainly! Let \\((X_1, \\dots, X_n)\\) be an exchangeable random vector.\n\nHere are some fancy LaTeX equations wrapped in a `katex` code fence, followed by their rendered versions:\n\n```katex\n\\[\ne^{i\\pi} + 1 = 0\n\\]\n```\n\n\\[\ne^{i\\pi} + 1 = 0\n\\]\n\n---\n\n```katex\n\\[\n\\int_0^\\infty e^{-x^2} \\, dx = \\frac{\\sqrt{\\pi}}{2}\n\\]\n```\n\n\\[\n\\int_0^\\infty e^{-x^2} \\, dx = \\frac{\\sqrt{\\pi}}{2}\n\\]\n\n---\n\n```katex\n\\[\n\\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2}{6}\n\\]\n```\n\n\\[\n\\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2}{6}\n\\]\n\n---\n\n```katex\n\\[\n\\nabla \\cdot \\mathbf{E} = \\frac{\\rho}{\\varepsilon_0}, \\quad \\nabla \\times \\mathbf{B} - \\mu_0 \\varepsilon_0 \\frac{\\partial \\mathbf{E}}{\\partial t} = \\mu_0 \\mathbf{J}\n\\]\n```\n\n\\[\n\\nabla \\cdot \\mathbf{E} = \\frac{\\rho}{\\varepsilon_0}, \\quad \\nabla \\times \\mathbf{B} - \\mu_0 \\varepsilon_0 \\frac{\\partial \\mathbf{E}}{\\partial t} = \\mu_0 \\mathbf{J}\n\\]\n\n---\n\n```katex\n\\[\n\\boxed{\n\\begin{aligned}\ni \\hbar \\frac{\\partial}{\\partial t} \\Psi(\\mathbf{r}, t) &= -\\frac{\\hbar^2}{2m} \\nabla^2 \\Psi(\\mathbf{r}, t) + V(\\mathbf{r}) \\Psi(\\mathbf{r}, t) \\\\\nE &= \\hbar \\omega\n\\end{aligned}\n}\n\\]\n```\n\n\\[\n\\boxed{\n\\begin{aligned}\ni \\hbar \\frac{\\partial}{\\partial t} \\Psi(\\mathbf{r}, t) &= -\\frac{\\hbar^2}{2m} \\nabla^2 \\Psi(\\mathbf{r}, t) + V(\\mathbf{r}) \\Psi(\\mathbf{r}, t) \\\\\nE &= \\hbar \\omega\n\\end{aligned}\n}\n\\]\n\n---\n\nIf you'd like more examples or specific topics, just ask!";
