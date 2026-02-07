"use client";

interface CodeLine {
  lineNumber: number;
  content: React.ReactNode;
}

const codeLines: CodeLine[] = [
  {
    lineNumber: 1,
    content: <span className="text-green-400">// Mulai dari sini</span>,
  },
  {
    lineNumber: 2,
    content: (
      <span>
        <span className="text-purple-400">const</span>{" "}
        <span className="text-blue-300">belajar</span> ={" "}
        <span className="text-orange-300">&quot;fundamental&quot;</span>;
      </span>
    ),
  },
  {
    lineNumber: 3,
    content: (
      <span>
        <span className="text-purple-400">const</span>{" "}
        <span className="text-blue-300">fokus</span> ={" "}
        <span className="text-cyan-300">true</span>;
      </span>
    ),
  },
  {
    lineNumber: 4,
    content: <span className="text-muted-foreground/30">│</span>,
  },
  {
    lineNumber: 5,
    content: (
      <span>
        <span className="text-purple-400">if</span> (fokus) {"{"}
      </span>
    ),
  },
  {
    lineNumber: 6,
    content: (
      <span className="pl-4">
        <span className="text-yellow-300">console</span>.
        <span className="text-blue-300">log</span>(
        <span className="text-orange-300">&quot;Mulai dari fundamental&quot;</span>);
      </span>
    ),
  },
  {
    lineNumber: 7,
    content: <span>{"}"}</span>,
  },
];

const CodeBlock = () => {
  return (
    <div className="w-100 h-87.5 gradient-card rounded-2xl shadow-card border border-border p-6 space-y-4 animate-float">
      {/* Window controls */}
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-400/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
        <div className="w-3 h-3 rounded-full bg-green-400/80" />
      </div>

      {/* Code lines */}
      <div className="space-y-3 font-mono text-sm">
        {codeLines.map((line) => (
          <div key={line.lineNumber} className="flex items-center gap-3">
            <span className="text-muted-foreground/50">{line.lineNumber}</span>
            {line.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeBlock;