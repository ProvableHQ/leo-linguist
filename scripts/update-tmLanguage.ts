import fs from "fs";
import path from "path";
import plist from "plist";

// The hand-maintained `syntaxes/leo.tmLanguage.json` is the source of truth for
// the Leo grammar. This script regenerates the plist (`syntaxes/leo.tmLanguage`)
// from it and re-emits the JSON in canonical (2-space) formatting.
//
// (Historically the JSON was pulled from a `leo-lsp` VSCode extension, but that
// repository no longer exists — Leo moved to a tree-sitter grammar in the
// `ProvableHQ/leo` monorepo. Edit the JSON here directly, then run this script.)
(async () => {
  // Defensive strip of non-standard keys that must never reach the published grammar.
  const prepareJSONforPlist = (json) => {
    delete json["extension"];
    delete json["scope"];
    return json;
  };

  const grammarJSON = path.join(__dirname, "../syntaxes/leo.tmLanguage.json");
  const grammarPlist = path.join(__dirname, "../syntaxes/leo.tmLanguage");

  const isExist = fs.existsSync(grammarJSON);
  if (!isExist) {
    throw "syntaxes/leo.tmLanguage.json not found!";
  }

  const content = await fs.promises.readFile(grammarJSON, { encoding: "utf8" });
  const updatedContent = prepareJSONforPlist(JSON.parse(content));
  const plistContent = plist.build(updatedContent);

  // Re-emit the JSON canonically so hand edits stay consistently formatted.
  await fs.promises.writeFile(
    grammarJSON,
    JSON.stringify(updatedContent, null, 2) + "\n",
  );
  await fs.promises.writeFile(grammarPlist, plistContent);
})();
