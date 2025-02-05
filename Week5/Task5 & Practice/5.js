class EventManager {
  constructor(name, startTime, endTime) {
    this.name = name;
    this.startTime = new Date(startTime);
    this.endTime = new Date(endTime);
    this.status = "Not Started";
  }
}
class StartEvent {
  constructor(eventManager) {
    this.eventManager = eventManager;
  }
  trigger() {
    if (new Date() >= this.eventManager.startTime) {
      this.eventManager.status = "Started ";
    }
    if (new Date() >= this.eventManager.startTime) {
      this.eventManager.status = "In Progress";
    }
  }
}
class FinishEvent {
  constructor(eventManager) {
    this.eventManager = eventManager;
  }
  trigger() {
    if (this.eventManager.status === "In Progress") {
      this.eventManager.status = "Finished";
    }
  }
}
class StatusEvent {
  constructor(eventManager) {
    this.eventManager = eventManager;
  }
  trigger() {
    console.log(`
            Event: ${this.eventManager.name}
            Status: ${this.eventManager.status}       
        `);
  }
}
const event1 = new EventManager(
  "Conference",
  "2025-02-04T10:00:00",
  "2025-02-04T15:00:00"
);
const startEvent = new StartEvent(event1);
const finishEvent = new FinishEvent(event1);
const statusEvent = new StatusEvent(event1);
startEvent.trigger();
setTimeout(() => {
  statusEvent.trigger();
  finishEvent.trigger();
  statusEvent.trigger();
}, 5000);
