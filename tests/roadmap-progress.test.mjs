import assert from "node:assert/strict";
import test from "node:test";
import {
  roadmapMilestones,
  checkpointMilestone,
  confirmedCompletedTaskIds,
} from "../config/roadmap.ts";

test("confirmedCompletedTaskIds matches expected task structure", () => {
  // M1 has 15 tasks, all 15 should be confirmed completed
  const m1 = roadmapMilestones.find((m) => m.id === "m1");
  assert.ok(m1);
  assert.equal(m1.tasks.length, 15);
  for (const task of m1.tasks) {
    assert.ok(
      confirmedCompletedTaskIds.includes(task.id),
      `Task ${task.id} (${task.label}) should be confirmed completed in M1`
    );
  }

  // M2 has 19 tasks: 10 completed (6 featured demo + 4 portfolio), 9 uncompleted (sales ops)
  const m2 = roadmapMilestones.find((m) => m.id === "m2");
  assert.ok(m2);
  assert.equal(m2.tasks.length, 19);

  // Completed M2 tasks (1 to 10)
  for (let i = 1; i <= 10; i++) {
    const taskId = `m2-${i}`;
    assert.ok(
      confirmedCompletedTaskIds.includes(taskId),
      `Task ${taskId} should be confirmed completed in M2`
    );
  }

  // Uncompleted Sales Operations tasks (11 to 19)
  for (let i = 11; i <= 19; i++) {
    const taskId = `m2-${i}`;
    assert.ok(
      !confirmedCompletedTaskIds.includes(taskId),
      `Task ${taskId} (Sales Ops) should NOT be in confirmedCompletedTaskIds`
    );
  }

  // M3 to M8 and Checkpoint must NOT have any confirmed tasks
  const remainingMilestones = [
    ...roadmapMilestones.filter((m) => m.id !== "m1" && m.id !== "m2"),
    checkpointMilestone,
  ];
  for (const milestone of remainingMilestones) {
    for (const task of milestone.tasks) {
      assert.ok(
        !confirmedCompletedTaskIds.includes(task.id),
        `Task ${task.id} in ${milestone.number} must NOT be automatically completed`
      );
    }
  }

  // Total confirmed tasks = 15 (M1) + 10 (M2) = 25
  assert.equal(confirmedCompletedTaskIds.length, 25);
});

test("migration logic merges existing user tasks and preserves revenue", () => {
  const SCHEMA_VERSION = 2;

  // Scenario 1: Fresh user (clean localStorage)
  const freshRaw = null;
  let freshState;
  if (!freshRaw) {
    freshState = {
      completedTaskIds: [...confirmedCompletedTaskIds],
      version: SCHEMA_VERSION,
    };
  }
  assert.equal(freshState.completedTaskIds.length, 25);
  assert.equal(freshState.actualRevenue, undefined);
  assert.equal(freshState.version, 2);

  // Scenario 2: Existing user with manual progress in M3 and actualRevenue
  const existingStored = {
    completedTaskIds: ["m1-1", "m3-1", "m3-2"],
    actualRevenue: 7500000,
  };
  const existingTaskIds = Array.isArray(existingStored.completedTaskIds)
    ? existingStored.completedTaskIds
    : [];
  const savedRevenue =
    typeof existingStored.actualRevenue === "number" ? existingStored.actualRevenue : undefined;
  const savedVersion =
    typeof existingStored.version === "number" ? existingStored.version : 1;

  assert.ok(savedVersion < SCHEMA_VERSION);
  const mergedTaskIds = Array.from(
    new Set([...existingTaskIds, ...confirmedCompletedTaskIds])
  );
  const migratedState = {
    completedTaskIds: mergedTaskIds,
    actualRevenue: savedRevenue,
    version: SCHEMA_VERSION,
  };

  // User's manual tasks m3-1 and m3-2 are preserved
  assert.ok(migratedState.completedTaskIds.includes("m3-1"));
  assert.ok(migratedState.completedTaskIds.includes("m3-2"));
  // Confirmed tasks are included
  assert.ok(migratedState.completedTaskIds.includes("m1-15"));
  assert.ok(migratedState.completedTaskIds.includes("m2-10"));
  // Revenue is preserved
  assert.equal(migratedState.actualRevenue, 7500000);
  assert.equal(migratedState.version, 2);
  // Total tasks = 25 confirmed + 2 user manual (m3-1, m3-2) = 27
  assert.equal(migratedState.completedTaskIds.length, 27);
});
