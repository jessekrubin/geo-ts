export type MaplibreTransition = {
  /**
   * Time allotted for transitions to complete. Optional number in range [0, ∞). Units in milliseconds. Defaults to 300.
   */
  duration?: number;

  /**
   * Length of time before a transition begins. Optional number in range [0, ∞). Units in milliseconds. Defaults to 0.
   */
  delay?: number;
};
