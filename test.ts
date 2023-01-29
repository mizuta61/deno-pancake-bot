import {
  assert,
  assertFalse,
} from "https://deno.land/std@0.175.0/testing/asserts.ts";
import { checkMessage } from "./main.ts";

const trueMessages = [
  "パンケーキ",
  "AぱんけーきB",
  "ぱ",
  "ぱんけ〜き",
  "パンけーき",
  "hotcake",
  "ぱんけき",
];
trueMessages.forEach((trueMessage) => {
  Deno.test(`checkMessage("${trueMessage}")がtrueを返すこと`, () => {
    assert(checkMessage(trueMessage));
  });
});

const falseMessages = ["AA", "パ", "ぱあ", "パンダ", "ケーキ"];
falseMessages.forEach((falseMessage) => {
  Deno.test(`checkMessage("${falseMessage}")がfalseを返すこと`, () => {
    assertFalse(checkMessage(falseMessage));
  });
});
