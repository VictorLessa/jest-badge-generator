const { readFile } = require("fs");
const { getBadgeByKey } = require("../external-services/badge-generator");

const readSummaryAndGenerateBadges = function(summaryPath, outputPath) {
  const reportKeys = ["lines", "statements", "functions", "branches"];
  readFile(`${summaryPath}`, "utf8", (err, res) => {
    if (err) {
      throw err;
    }

    const report = JSON.parse(res);
    reportKeys.forEach(getBadgeByKey(report, outputPath));
  });
};

module.exports = {
  readSummaryAndGenerateBadges
};
