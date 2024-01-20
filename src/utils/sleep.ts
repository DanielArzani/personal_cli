/**
 * A function that will block javascripts' thread causing a delay
 * @param time - In milliseconds, the amount of time to delay by
 * @param callback - Should be an empty call back function
 * @example
 * 	sleep(10000, function () {
        // executes after ten second, and blocks the thread
    });
 */
export default function sleep(time: number, callback: Function) {
	var stop = new Date().getTime();
	while (new Date().getTime() < stop + time) {}
	callback();
}
