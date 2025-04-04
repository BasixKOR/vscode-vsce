declare module 'parse-semver' {
	interface Result {
		readonly name: string;
		readonly range: string;
		readonly version: string;
	}
	module parseSemver {}
	function parseSemver(input: string): Result;
	export = parseSemver;
}
