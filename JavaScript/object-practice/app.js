const terminal = { 
    msg: [

        "[SYSTEM] Boot sequence initiated...",
        "[SYSTEM] Loading development environment...",
        "[SYSTEM] Initializing runtime services...",
        "[SYSTEM] Checking environment variables...",
        "[SYSTEM] Environment configuration loaded.",
        "[SYSTEM] Runtime version verified.",
        "[SYSTEM] Memory allocation initialized.",
        "[SYSTEM] Process manager started.",
        "[SYSTEM] Background services online.",

        "[DEV] Opening project workspace...",
        "[DEV] Loading project configuration...",
        "[DEV] Reading package metadata...",
        "[DEV] Resolving project dependencies...",
        "[DEV] Dependency tree generated.",
        "[DEV] Checking installed modules...",
        "[DEV] Module cache detected.",
        "[DEV] Validating module integrity...",
        "[DEV] All dependencies verified.",
        "[DEV] Preparing development server...",

        "[BUILD] Build pipeline initialized...",
        "[BUILD] Reading source files...",
        "[BUILD] Parsing project structure...",
        "[BUILD] Discovering JavaScript modules...",
        "[BUILD] Discovering stylesheet modules...",
        "[BUILD] Discovering HTML templates...",
        "[BUILD] Building dependency graph...",
        "[BUILD] Dependency graph completed.",
        "[BUILD] Preparing source transformations...",
        "[BUILD] Transforming source modules...",
        "[BUILD] Processing imports...",
        "[BUILD] Processing exports...",
        "[BUILD] Resolving module references...",
        "[BUILD] Module resolution completed.",

        "[COMPILER] Initializing compiler...",
        "[COMPILER] Loading compiler configuration...",
        "[COMPILER] Parsing source code...",
        "[COMPILER] Building syntax tree...",
        "[COMPILER] Analyzing declarations...",
        "[COMPILER] Resolving identifiers...",
        "[COMPILER] Checking scope boundaries...",
        "[COMPILER] Checking function declarations...",
        "[COMPILER] Checking object structures...",
        "[COMPILER] Checking array definitions...",
        "[COMPILER] Checking control flow...",
        "[COMPILER] Checking expressions...",
        "[COMPILER] Checking return paths...",
        "[COMPILER] Syntax validation completed.",
        "[COMPILER] No syntax errors detected.",

        "[ENGINE] Initializing JavaScript runtime...",
        "[ENGINE] Loading execution context...",
        "[ENGINE] Creating global environment...",
        "[ENGINE] Registering runtime objects...",
        "[ENGINE] Initializing function environment...",
        "[ENGINE] Preparing execution stack...",
        "[ENGINE] Loading application modules...",
        "[ENGINE] Linking runtime dependencies...",
        "[ENGINE] Runtime initialization completed.",

        "[APP] Starting application...",
        "[APP] Creating application instance...",
        "[APP] Loading configuration...",
        "[APP] Registering application services...",
        "[APP] Initializing application state...",
        "[APP] Creating application objects...",
        "[APP] Registering event handlers...",
        "[APP] Preparing application routes...",
        "[APP] Loading user interface modules...",
        "[APP] UI initialization completed.",

        "[DATA] Initializing data layer...",
        "[DATA] Loading local configuration...",
        "[DATA] Preparing data structures...",
        "[DATA] Allocating collection buffers...",
        "[DATA] Indexing application resources...",
        "[DATA] Building lookup tables...",
        "[DATA] Preparing cached values...",
        "[DATA] Cache initialization completed.",

        "[NETWORK] Initializing network layer...",
        "[NETWORK] Configuring communication interface...",
        "[NETWORK] Preparing request handlers...",
        "[NETWORK] Loading connection manager...",
        "[NETWORK] Initializing request queue...",
        "[NETWORK] Request queue ready.",
        "[NETWORK] Connection manager ready.",
        "[NETWORK] Network subsystem online.",

        "[SERVER] Starting local development server...",
        "[SERVER] Loading server configuration...",
        "[SERVER] Registering middleware...",
        "[SERVER] Registering request handlers...",
        "[SERVER] Preparing static assets...",
        "[SERVER] Preparing response handlers...",
        "[SERVER] Server configuration validated.",
        "[SERVER] Development server ready.",

        "[CACHE] Scanning application cache...",
        "[CACHE] Loading cached modules...",
        "[CACHE] Validating cached resources...",
        "[CACHE] Checking cache timestamps...",
        "[CACHE] Removing expired entries...",
        "[CACHE] Rebuilding cache index...",
        "[CACHE] Cache optimization completed.",

        "[TEST] Initializing test environment...",
        "[TEST] Discovering test modules...",
        "[TEST] Loading test configuration...",
        "[TEST] Preparing test runner...",
        "[TEST] Running unit tests...",
        "[TEST] Testing utility functions...",
        "[TEST] Testing object methods...",
        "[TEST] Testing array operations...",
        "[TEST] Testing function execution...",
        "[TEST] Testing asynchronous operations...",
        "[TEST] All test suites completed.",
        "[TEST] Test environment verified.",

        "[DEBUG] Initializing diagnostic subsystem...",
        "[DEBUG] Inspecting runtime state...",
        "[DEBUG] Inspecting active processes...",
        "[DEBUG] Inspecting memory usage...",
        "[DEBUG] Inspecting event queue...",
        "[DEBUG] Inspecting asynchronous callbacks...",
        "[DEBUG] Inspecting application state...",
        "[DEBUG] Inspecting registered handlers...",
        "[DEBUG] Diagnostic scan completed.",
        "[DEBUG] No runtime anomalies detected.",

        "[OPTIMIZE] Starting performance analysis...",
        "[OPTIMIZE] Measuring execution time...",
        "[OPTIMIZE] Analyzing memory allocation...",
        "[OPTIMIZE] Inspecting repeated operations...",
        "[OPTIMIZE] Analyzing function calls...",
        "[OPTIMIZE] Evaluating cached resources...",
        "[OPTIMIZE] Processing optimization candidates...",
        "[OPTIMIZE] Runtime optimization completed.",

        "[BUNDLE] Initializing asset bundler...",
        "[BUNDLE] Collecting source modules...",
        "[BUNDLE] Resolving dependencies...",
        "[BUNDLE] Combining application modules...",
        "[BUNDLE] Processing static resources...",
        "[BUNDLE] Generating application bundle...",
        "[BUNDLE] Bundle generated successfully.",

        "[SECURITY] Initializing development security checks...",
        "[SECURITY] Validating application configuration...",
        "[SECURITY] Checking runtime permissions...",
        "[SECURITY] Checking exposed development services...",
        "[SECURITY] Validating request configuration...",
        "[SECURITY] Security checks completed.",

        "[DEPLOY] Preparing deployment configuration...",
        "[DEPLOY] Validating build output...",
        "[DEPLOY] Checking generated assets...",
        "[DEPLOY] Verifying application metadata...",
        "[DEPLOY] Preparing deployment package...",
        "[DEPLOY] Deployment package ready.",

        "[SYSTEM] Monitoring application state...",
        "[SYSTEM] Monitoring runtime processes...",
        "[SYSTEM] Monitoring memory usage...",
        "[SYSTEM] Monitoring event queue...",
        "[SYSTEM] Monitoring application services...",
        "[SYSTEM] All systems operational.",
        "[SYSTEM] Development environment stable.",
        "[SYSTEM] Application running normally.",
        "[SYSTEM] Waiting for next operation..."
    ],

i: 0, 

loops() {

   let message = this.msg[this.i]

    this.i++

    if ( this.i === this.msg.length) {
        
       this.i = 0
    }

    return message

    
},


// runcode() {

//     setInterval( () => { console.log(this.loops())

//     },1000)


}






terminal.runcode()