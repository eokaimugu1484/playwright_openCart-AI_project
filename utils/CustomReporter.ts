import type {
  FullResult,
  Reporter,
  Suite,
  TestCase,
  TestResult,
} from "@playwright/test/reporter";

export default class CustomReporter implements Reporter {
  onBegin(_config: Parameters<NonNullable<Reporter["onBegin"]>>[0], suite: Suite): void {
    console.log(`Running ${suite.allTests().length} tests`);
  }

  onTestEnd(test: TestCase, result: TestResult): void {
    console.log(`${result.status.toUpperCase()}: ${test.title}`);
  }

  onEnd(result: FullResult): void {
    console.log(`Finished with status: ${result.status}`);
  }
}
