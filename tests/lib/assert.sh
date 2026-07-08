# Minimal assertion helpers (no external deps). Source this from a test runner.
TESTS_RUN=0; TESTS_PASS=0; TESTS_FAIL=0
FAILED=()

pass(){ TESTS_RUN=$((TESTS_RUN+1)); TESTS_PASS=$((TESTS_PASS+1)); echo "  ok   $1"; }
fail(){ TESTS_RUN=$((TESTS_RUN+1)); TESTS_FAIL=$((TESTS_FAIL+1)); FAILED+=("$1"); echo "  FAIL $1"; [ -n "${2:-}" ] && echo "         -> $2"; }

assert_contains(){ if grep -qF -- "$2" "$1" 2>/dev/null; then pass "$3"; else fail "$3" "expected substring: $2"; fi; }
assert_grep(){     if grep -qE -- "$2" "$1" 2>/dev/null; then pass "$3"; else fail "$3" "expected regex: $2"; fi; }
assert_not_grep(){ if grep -qE -- "$2" "$1" 2>/dev/null; then fail "$3" "unexpected regex: $2"; else pass "$3"; fi; }
assert_eq(){ if [ "$1" = "$2" ]; then pass "$3"; else fail "$3" "expected '$2' got '$1'"; fi; }
assert_ne(){ if [ "$1" != "$2" ]; then pass "$3"; else fail "$3" "expected not '$2'"; fi; }

summary(){
  echo
  echo "Ran $TESTS_RUN  |  Pass $TESTS_PASS  |  Fail $TESTS_FAIL"
  if [ "$TESTS_FAIL" -ne 0 ]; then
    echo "FAILURES:"; for f in "${FAILED[@]}"; do echo "  - $f"; done
    return 1
  fi
  return 0
}
