interface HealthUseCase {
  check: () => Promise<boolean>
}

export { HealthUseCase }
