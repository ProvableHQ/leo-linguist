import fs from "fs";
import path from "path";
import plist from "plist";

(async () => {
  const prepareJSONforPlist = (json) => {
    delete json["extension"];
    delete json["scope"];
    return json;
  } 
  const expectationsFileJSON = path.join(
    __dirname,
    "../syntaxes/leo.tmLanguage.json"
  );
  const expectationsFilePlist = path.join(
    __dirname,
    "../syntaxes/leo.tmLanguage"
  );
  // To get latest version of leo.tmLanguage, need to have actual leo-lsp repository in the same level 
  // After run script if there are changes in syntaxes folder, make commit and push
  const tmLanguageExpectationFile = path.join(
    __dirname,
    "../../leo-lsp/vscode-extension/syntaxes/leo.tmLanguage.json"
  );
  const isExist = await fs.existsSync(tmLanguageExpectationFile);
  if (!isExist) {
    throw "leo.tmLanguage.json not found!";
  }
  const content = await fs.promises.readFile(
    tmLanguageExpectationFile,
    { encoding: "utf8" }
  );
  const updatedContent = prepareJSONforPlist(JSON.parse(content));
  const plistContent = plist.build(updatedContent);
  await fs.promises.writeFile(
    expectationsFileJSON,
    JSON.stringify(updatedContent, null, 2),
  );
  await fs.promises.writeFile(
    expectationsFilePlist,
    plistContent,
  );
})();
