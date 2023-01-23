package com.agiledeveloper;

public class Remote {
  private RemoteControlled remoteControlled;

  public Remote(RemoteControlled remoteControlled) {
    this.remoteControlled = remoteControlled;
  }

  public void up() {
    remoteControlled.up();
  }

  public void down() {
    remoteControlled.down();
  }
}