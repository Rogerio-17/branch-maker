import Head from "next/head";
import { useRef, useState } from "react";

const BRANCH_TYPES = ["bug", "task", "feat", "enh", "hotfix", "enhancement"];

export default function Home() {
  const [value, setValue] = useState(
    "rdar://333111 ([FRONT][BUG][QA]: we are good)"
  );

  const divRef = useRef<HTMLDivElement>(null);

  function handleCopy() {
    const content = divRef.current?.textContent;
    const commandGit = "git checkout -b";
    const textCopy = `${commandGit} ${content}`;

    navigator.clipboard.writeText(textCopy);
    setValue("");
  }

  const radar = value;

  const regex = {
    radar: /rdar:\/\/\d+/,
    brackets: /\(|\[\w+\]|:|\)/g,
    spaces: /\s+/g,
    nan: /\D+/,
  };

  const radarNumber = radar.match(regex.radar)?.[0]?.replace(regex.nan, "");

  const type = BRANCH_TYPES.find((t) => radar.toLowerCase().includes(t));

  const removeRadarNumber = radar.replace(regex.radar, "").trim();

  const removeTags = removeRadarNumber.replace(regex.brackets, "").trim();

  const formatText = removeTags.replace(regex.spaces, "-").toLowerCase();

  const result = value ? `${type}/${radarNumber}-${formatText}` : ":)";

  return (
    <>
      <Head>
        <title>Branch Maker</title>
      </Head>
      <main className={`min-h-screen w-full max-w-[720px] mx-auto mt-10`}>
        <h1 className="text-4xl font-medium text-center">Branch Maker</h1>

        <div className="flex flex-col gap-8 mt-10">
          <input
            type="text"
            value={value}
            onChange={(ev) => {
              setValue(ev.target.value);
            }}
            placeholder="Past here..."
            className="p-3 px-5 border-2 border-gray-200 focus:border-blue-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-300"
          />

          <div
            ref={divRef}
            data-testid="result-box"
            className="rounded-2xl bg-gray-50 p-5 font-medium font-mono border border-gray-100"
          >
            {result}
          </div>
          <div className="text-center">
            <button
              disabled={!value}
              onClick={handleCopy}
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-md px-10 py-2.5 text-center cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed"
            >
              Copy
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
