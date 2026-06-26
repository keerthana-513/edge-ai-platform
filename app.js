/**
 * TaskSphere AI - Core Application Script
 * Handlers for navigation, state management, charts, and simulated P2P interactions.
 */

class TaskSphereApp {
    constructor() {
        // App State
        this.state = {
            user: {
                name: "Keertan",
                email: "keertan@tasksphere.ai",
                role: "worker", // worker or provider
                skills: ["Data Labeling", "Translation", "Design"],
                experience: "Intermediate",
                balance: 450.00,
                earnings: 680.50,
                completedCount: 28,
                reputation: 9.8,
                avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=keert"
            },
            loggedIn: false,
            currentView: "landing",
            currentMyTasksTab: "open",
            currentSettingsTab: "account",
            activeSidebarCollapse: false,
            uploadedFile: null,
            
            // Core Tasks Pool (Mock Escrows)
            tasks: [
                {
                    id: "TS-101",
                    title: "Label 500 images for autonomous vehicle validation",
                    description: "Help train our computer vision models by drawing 2D bounding boxes around vehicles, pedestrians, cyclists, and traffic lights. Detailed label attributes must match our taxonomy guide (e.g. occlusion percentage, vehicle type). Deliverables should be exported as COCO JSON format.",
                    category: "Data Labeling",
                    reward: 45.00,
                    deadline: "2026-06-30",
                    deadlineDays: 5,
                    complexity: "Medium",
                    provider: {
                        name: "AutoLab Inc",
                        rating: "4.9",
                        publishedCount: 142,
                        completionRate: "100%"
                    },
                    status: "open",
                    acceptedBy: null,
                    matchPercentage: 98,
                    estTime: "1h 15m",
                    progress: 0,
                    dateAdded: "2026-06-25"
                },
                {
                    id: "TS-102",
                    title: "Translate mobile UI elements from English to German",
                    description: "Translate a list of 240 short text strings (buttons, tooltips, warnings, onboarding screens) for our fintech application. Maintain localization context: numbers, currency structures, and financial terms. Translations must feel natural, concise, and fit layout boundaries.",
                    category: "Translation",
                    reward: 30.00,
                    deadline: "2026-06-27",
                    deadlineDays: 2,
                    complexity: "Low",
                    provider: {
                        name: "TranslateCo",
                        rating: "4.8",
                        publishedCount: 88,
                        completionRate: "98%"
                    },
                    status: "open",
                    acceptedBy: null,
                    matchPercentage: 95,
                    estTime: "45m",
                    progress: 0,
                    dateAdded: "2026-06-24"
                },
                {
                    id: "TS-103",
                    title: "Model Reinforcement Feedback (RLHF) Tuning",
                    description: "Review pairs of AI model assistant responses. Score each answer based on accuracy, alignment, safety, and conciseness. For answers with minor issues, rewrite the response to demonstrate optimal helpfulness. Experience in computer science, logic, or linguistics is highly preferred.",
                    category: "AI Training",
                    reward: 65.00,
                    deadline: "2026-06-29",
                    deadlineDays: 4,
                    complexity: "High",
                    provider: {
                        name: "HyperScale AI",
                        rating: "5.0",
                        publishedCount: 310,
                        completionRate: "100%"
                    },
                    status: "open",
                    acceptedBy: null,
                    matchPercentage: 92,
                    estTime: "1h 45m",
                    progress: 0,
                    dateAdded: "2026-06-25"
                },
                {
                    id: "TS-104",
                    title: "Design brand guidelines logo for biotech startup",
                    description: "Create a modern, clean, vector logo for 'HelixGen', a startup developing gene-editing therapeutics. Logo should represent DNA structure, growth, or clinical precision. Deliver high-res source files (.svg, .ai) along with primary brand colors and typography recommendations.",
                    category: "Design",
                    reward: 120.00,
                    deadline: "2026-07-05",
                    deadlineDays: 10,
                    complexity: "Medium",
                    provider: {
                        name: "BioSphere Labs",
                        rating: "4.7",
                        publishedCount: 22,
                        completionRate: "95%"
                    },
                    status: "open",
                    acceptedBy: null,
                    matchPercentage: 88,
                    estTime: "4h 0m",
                    progress: 0,
                    dateAdded: "2026-06-23"
                },
                {
                    id: "TS-105",
                    title: "Transcribe 10-minute customer feedback audio clips",
                    description: "Listen to 5 audio clips (2 minutes each) of customer support feedback and transcribe them into raw text transcripts. Clean up stutters and filler words ('um', 'ah', 'like') while maintaining verbatim quotes. Format output with speaker timestamps.",
                    category: "Transcription",
                    reward: 15.00,
                    deadline: "2026-06-26",
                    deadlineDays: 1,
                    complexity: "Low",
                    provider: {
                        name: "ScribeTech",
                        rating: "4.5",
                        publishedCount: 154,
                        completionRate: "99%"
                    },
                    status: "open",
                    acceptedBy: null,
                    matchPercentage: 75,
                    estTime: "30m",
                    progress: 0,
                    dateAdded: "2026-06-25"
                },
                {
                    id: "TS-106",
                    title: "Review and verify logic of smart contract vault",
                    description: "Audit a Solidity ERC-4626 tokenized vault smart contract for potential reentrancy, integer overflow, flash-loan vulnerabilities, and logical flaws. Provide a detailed markdown report detailing bugs, threat classifications (High, Medium, Low), and fix suggestions.",
                    category: "Coding",
                    reward: 150.00,
                    deadline: "2026-07-02",
                    deadlineDays: 7,
                    complexity: "High",
                    provider: {
                        name: "DeFi Safe",
                        rating: "4.9",
                        publishedCount: 45,
                        completionRate: "100%"
                    },
                    status: "open",
                    acceptedBy: null,
                    matchPercentage: 60,
                    estTime: "5h 30m",
                    progress: 0,
                    dateAdded: "2026-06-25"
                },
                {
                    id: "TS-107",
                    title: "Write SEO optimization article about microtasking",
                    description: "Write a high-quality, engaging 1,200-word blog article summarizing the future of P2P decentralized microtasking, smart contract escrows, and AI recommendation engines. Integrate targeted SEO keywords (provided on accept) and cite reliable market statistics.",
                    category: "Writing",
                    reward: 25.00,
                    deadline: "2026-06-28",
                    deadlineDays: 3,
                    complexity: "Low",
                    provider: {
                        name: "ContentGen",
                        rating: "4.6",
                        publishedCount: 75,
                        completionRate: "97%"
                    },
                    status: "open",
                    acceptedBy: null,
                    matchPercentage: 82,
                    estTime: "1h 30m",
                    progress: 0,
                    dateAdded: "2026-06-24"
                }
            ],
            
            // Transactions ledger
            transactions: [
                { id: "TX-9022", task: "Translate Spanish Landing Copy", amount: 25.00, status: "Completed", date: "2026-06-24" },
                { id: "TX-9021", task: "Classify 200 Audio Prompts", amount: 15.00, status: "Completed", date: "2026-06-23" },
                { id: "TX-9020", task: "Solidity Escrow Gas Optimization", amount: 95.00, status: "Completed", date: "2026-06-20" },
                { id: "TX-9019", task: "Babel Webpack Config Review", amount: 40.00, status: "Completed", date: "2026-06-18" }
            ],

            // Notifications history
            notifications: [
                { id: "NT-01", type: "success", msg: "Escrow funds $95.00 released for 'Solidity Escrow Gas Optimization'.", read: false, time: "2 hours ago" },
                { id: "NT-02", type: "info", msg: "New recommendation: 'Model Reinforcement Feedback (RLHF) Tuning' matches 92% of your profile.", read: false, time: "4 hours ago" },
                { id: "NT-03", type: "warning", msg: "Task 'Translate Spanish Landing Copy' review complete. Provider left 5 stars.", read: true, time: "1 day ago" }
            ],

            // Reviews history
            reviews: [
                { author: "HyperScale AI", rating: 5, date: "2026-06-24", role: "Provider", text: "Excellent precision on RLHF prompts. Very detailed comments on grammar and structure." },
                { author: "DeFi Safe", rating: 5, date: "2026-06-20", role: "Provider", text: "Identified gas leaks in secondary vaults and recommended a neat rewrite of storage mappings. Outstanding Solidity skills." },
                { author: "AutoLab Inc", rating: 4, date: "2026-06-15", role: "Provider", text: "Good image labeling accuracy. Completed tasks well before deadline. Highly recommended solver." }
            ]
        };

        // Charts references
        this.charts = {};

        // DOM elements cache
        this.initDOMElements();

        // Bind event listeners
        this.bindEvents();

        // Initial setup
        this.renderNotifications();
        this.renderReviews();
        this.updateStatsUI();
        this.filterTasks();
        this.updateMyTasksTabsCount();
    }

    initDOMElements() {
        this.elements = {
            toastContainer: document.getElementById("toast-container"),
            landingLayout: document.getElementById("landing-layout"),
            authLayout: document.getElementById("auth-layout"),
            mainLayout: document.getElementById("main-layout"),
            loginCard: document.getElementById("login-card"),
            registerCard: document.getElementById("register-card"),
            
            // Sub views
            views: {
                dashboard: document.getElementById("view-dashboard"),
                browse: document.getElementById("view-browse"),
                createTask: document.getElementById("view-create-task"),
                myTasks: document.getElementById("view-my-tasks"),
                recommendations: document.getElementById("view-recommendations"),
                analytics: document.getElementById("view-analytics"),
                transactions: document.getElementById("view-transactions"),
                reviews: document.getElementById("view-reviews"),
                settings: document.getElementById("view-settings"),
                notifications: document.getElementById("view-notifications"),
                profile: document.getElementById("view-profile")
            },

            // Sidebar and Nav
            sidebar: document.getElementById("app-sidebar"),
            collapseIcon: document.getElementById("collapse-icon"),
            
            // Dropdowns
            notifDropdown: document.getElementById("notification-dropdown"),
            notifBadge: document.getElementById("notification-badge"),
            notifDropdownList: document.getElementById("notification-dropdown-list"),
            notifPageList: document.getElementById("notifications-page-list"),
            messageDropdown: document.getElementById("message-dropdown"),
            messageBadge: document.getElementById("message-badge"),
            profileDropdown: document.getElementById("profile-dropdown"),
            
            // Stats
            balanceVal: document.getElementById("dashboard-balance-val"),
            statTotalTasks: document.getElementById("stat-total-tasks"),
            statCompletedTasks: document.getElementById("stat-completed-tasks"),
            statEarnings: document.getElementById("stat-earnings"),
            statRepScore: document.getElementById("stat-rep-score"),
            
            // Modals
            taskModal: document.getElementById("task-details-modal"),

            // Forms & UI lists
            createTaskForm: document.getElementById("create-task-form"),
            browseTasksList: document.getElementById("browse-tasks-list"),
            myTasksList: document.getElementById("my-tasks-list"),
            aiRecommendationsList: document.getElementById("ai-recommendations-list"),
            transactionsTableBody: document.getElementById("transactions-table-body"),
            reviewsListContainer: document.getElementById("reviews-list-container"),
            
            // Tabs Counters
            countTabOpen: document.getElementById("count-tab-open"),
            countTabProgress: document.getElementById("count-tab-progress"),
            countTabCompleted: document.getElementById("count-tab-completed"),
            countTabCancelled: document.getElementById("count-tab-cancelled")
        };
    }

    bindEvents() {
        // Document level click to close dropdowns
        document.addEventListener("click", () => {
            this.closeAllDropdowns();
        });
    }

    /* Core Navigation Router */
    navigateTo(viewName) {
        this.closeAllDropdowns();
        
        // Setup visual transitions
        if (viewName === "landing") {
            this.state.loggedIn = false;
            this.elements.landingLayout.classList.remove("hidden");
            this.elements.authLayout.classList.add("hidden");
            this.elements.mainLayout.classList.add("hidden");
            this.state.currentView = "landing";
            return;
        }

        if (viewName === "login" || viewName === "register") {
            this.state.loggedIn = false;
            this.elements.landingLayout.classList.add("hidden");
            this.elements.authLayout.classList.remove("hidden");
            this.elements.mainLayout.classList.add("hidden");
            
            if (viewName === "login") {
                this.elements.loginCard.classList.remove("hidden");
                this.elements.registerCard.classList.add("hidden");
            } else {
                this.elements.loginCard.classList.add("hidden");
                this.elements.registerCard.classList.remove("hidden");
            }
            this.state.currentView = viewName;
            return;
        }

        // Dashboard views (Logged in)
        if (!this.state.loggedIn) {
            // Force mock logging in if navigating inside without explicit submission
            this.simLogin();
        }

        this.elements.landingLayout.classList.add("hidden");
        this.elements.authLayout.classList.add("hidden");
        this.elements.mainLayout.classList.remove("hidden");

        // Hide all inner views, then show current
        Object.keys(this.elements.views).forEach(key => {
            this.elements.views[key].classList.add("hidden");
        });

        const targetView = this.elements.views[viewName];
        if (targetView) {
            targetView.classList.remove("hidden");
            this.state.currentView = viewName;
        }

        // Update active sidebar link
        document.querySelectorAll(".sidebar-link").forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("data-page") === viewName) {
                link.classList.add("active");
            }
        });

        // Trigger dynamic view renders
        this.onViewLoaded(viewName);
        
        // Scroll to top of content
        window.scrollTo(0, 0);
    }

    onViewLoaded(viewName) {
        if (viewName === "dashboard") {
            this.renderDashboardAIList();
            this.renderDashboardTransactions();
            this.initDashboardCharts();
        } else if (viewName === "browse") {
            this.filterTasks();
        } else if (viewName === "my-tasks") {
            this.renderMyTasks();
        } else if (viewName === "recommendations") {
            this.renderAIRecommendations();
        } else if (viewName === "analytics") {
            this.initAnalyticsCharts();
        } else if (viewName === "transactions") {
            this.renderTransactionsTable();
        } else if (viewName === "profile") {
            this.renderProfile();
        } else if (viewName === "notifications") {
            this.renderNotificationsPage();
        }
    }

    /* Auth Actions */
    simLogin() {
        this.state.loggedIn = true;
        this.updateProfileUI();
        this.showToast("Logged in as " + this.state.user.name + " (Simulated)", "success");
    }

    handleLogin(e) {
        if (e) e.preventDefault();
        const email = document.getElementById("login-email").value || "keertan@tasksphere.ai";
        this.state.user.email = email;
        this.state.user.name = email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1);
        this.state.loggedIn = true;
        
        this.updateProfileUI();
        this.navigateTo("dashboard");
        this.showToast("Logged in successfully. Welcome back!", "success");
        
        // Push welcome notification
        this.pushNotification("success", `Welcome back, ${this.state.user.name}! Your AI recommendation matches are updated.`);
    }

    handleRegister(e) {
        if (e) e.preventDefault();
        const name = document.getElementById("reg-name").value;
        const email = document.getElementById("reg-email").value;
        const role = document.getElementById("reg-role").value;
        const exp = document.getElementById("reg-experience").value;
        
        // Get checked skills
        const checkedSkills = [];
        document.querySelectorAll("input[name='skills']:checked").forEach(checkbox => {
            checkedSkills.push(checkbox.value);
        });

        this.state.user.name = name;
        this.state.user.email = email;
        this.state.user.role = role;
        this.state.user.experience = exp.charAt(0).toUpperCase() + exp.slice(1);
        this.state.user.skills = checkedSkills.length ? checkedSkills : ["Data Labeling"];
        
        // Set new avatar
        this.state.user.avatar = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${name}`;
        
        // Reset balance/earnings for new user
        this.state.user.balance = role === "worker" ? 0.00 : 1000.00;
        this.state.user.earnings = 0.00;
        this.state.user.completedCount = 0;
        this.state.user.reputation = 10.0; // Perfect reputation to start

        this.state.loggedIn = true;
        this.updateProfileUI();
        this.navigateTo("dashboard");
        this.showToast("Account created! Welcome to TaskSphere AI.", "success");
        
        // Welcome notification
        this.pushNotification("info", `Account created successfully. Role: ${this.state.user.role.toUpperCase()}`);
    }

    handleSocialLogin(provider) {
        this.state.loggedIn = true;
        this.state.user.name = provider + " User";
        this.state.user.email = provider.toLowerCase() + "@tasksphere.ai";
        this.state.user.avatar = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${provider}`;
        this.updateProfileUI();
        this.navigateTo("dashboard");
        this.showToast(`Logged in via ${provider} (Simulated)`, "success");
    }

    handleLogout() {
        this.state.loggedIn = false;
        this.showToast("Logged out successfully.", "info");
        this.navigateTo("landing");
    }

    updateProfileUI() {
        document.getElementById("dropdown-username").textContent = this.state.user.name;
        document.getElementById("dropdown-userrole").textContent = this.state.user.role.charAt(0).toUpperCase() + this.state.user.role.slice(1);
        document.getElementById("dashboard-welcome-name").textContent = this.state.user.name;
        
        const avatarSrc = this.state.user.avatar;
        document.getElementById("nav-profile-pic").src = avatarSrc;
        document.getElementById("nav-dropdown-pic").src = avatarSrc;
        
        this.elements.balanceVal.textContent = `$${this.state.user.balance.toFixed(2)}`;
        this.updateStatsUI();
        
        // Adjust navigation links based on role
        const createTaskLink = document.querySelector('.sidebar-link[data-page="create-task"]');
        if (this.state.user.role === "worker") {
            createTaskLink.style.display = "none";
        } else {
            createTaskLink.style.display = "flex";
        }
    }

    updateStatsUI() {
        this.elements.statTotalTasks.textContent = this.state.tasks.filter(t => t.status === "open").length;
        this.elements.statCompletedTasks.textContent = this.state.user.completedCount;
        this.elements.statEarnings.textContent = `$${this.state.user.earnings.toFixed(2)}`;
        this.elements.statRepScore.innerHTML = `${this.state.user.reputation.toFixed(1)}<span class="stat-max">/10</span>`;
        this.elements.balanceVal.textContent = `$${this.state.user.balance.toFixed(2)}`;
    }

    /* Collapsible Sidebar Handlers */
    toggleSidebar() {
        this.elements.sidebar.classList.toggle("open");
    }

    toggleSidebarCollapse() {
        this.state.activeSidebarCollapse = !this.state.activeSidebarCollapse;
        if (this.state.activeSidebarCollapse) {
            this.elements.sidebar.classList.add("collapsed");
        } else {
            this.elements.sidebar.classList.remove("collapsed");
        }
    }

    /* Dropdowns UI Toggles */
    closeAllDropdowns() {
        this.elements.notifDropdown.classList.add("hidden");
        this.elements.messageDropdown.classList.add("hidden");
        this.elements.profileDropdown.classList.add("hidden");
    }

    toggleNotificationPanel(e) {
        e.stopPropagation();
        const wasHidden = this.elements.notifDropdown.classList.contains("hidden");
        this.closeAllDropdowns();
        if (wasHidden) {
            this.elements.notifDropdown.classList.remove("hidden");
        }
    }

    toggleMessagePanel(e) {
        e.stopPropagation();
        const wasHidden = this.elements.messageDropdown.classList.contains("hidden");
        this.closeAllDropdowns();
        if (wasHidden) {
            this.elements.messageDropdown.classList.remove("hidden");
        }
    }

    toggleProfileDropdown(e) {
        e.stopPropagation();
        const wasHidden = this.elements.profileDropdown.classList.contains("hidden");
        this.closeAllDropdowns();
        if (wasHidden) {
            this.elements.profileDropdown.classList.remove("hidden");
        }
    }

    /* Global Search */
    handleGlobalSearch(e) {
        if (e.key === "Enter") {
            const query = e.target.value.trim();
            if (query) {
                this.navigateTo("browse");
                document.getElementById("browse-search-input").value = query;
                this.filterTasks();
            }
        }
    }

    /* Toast Notification System */
    showToast(message, type = "info") {
        const toast = document.createElement("div");
        toast.className = `toast ${type}`;
        
        let icon = "info";
        if (type === "success") icon = "check-circle";
        if (type === "warning") icon = "alert-triangle";
        if (type === "error") icon = "alert-circle";
        
        toast.innerHTML = `
            <i data-lucide="${icon}"></i>
            <span>${message}</span>
            <button class="toast-close"><i data-lucide="x"></i></button>
        `;
        
        this.elements.toastContainer.appendChild(toast);
        lucide.createIcons();
        
        // Bind close button
        toast.querySelector(".toast-close").addEventListener("click", () => {
            toast.remove();
        });
        
        // Auto remove
        setTimeout(() => {
            toast.style.animation = "toast-in 0.3s ease reverse forwards";
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    }

    /* Notification State management */
    pushNotification(type, msg) {
        const id = "NT-" + Math.floor(Math.random() * 10000);
        const newNotif = {
            id: id,
            type: type,
            msg: msg,
            read: false,
            time: "Just now"
        };
        this.state.notifications.unshift(newNotif);
        this.renderNotifications();
        this.showToast(msg, type);
    }

    renderNotifications() {
        const unreadCount = this.state.notifications.filter(n => !n.read).length;
        if (unreadCount > 0) {
            this.elements.notifBadge.textContent = unreadCount;
            this.elements.notifBadge.classList.remove("hidden");
        } else {
            this.elements.notifBadge.classList.add("hidden");
        }

        // Render drop-down items
        this.elements.notifDropdownList.innerHTML = this.state.notifications.map(n => `
            <div class="dropdown-item ${n.read ? '' : 'unread'}" onclick="app.readNotification('${n.id}')">
                <div class="item-avatar">${n.type === 'success' ? '✅' : n.type === 'warning' ? '⚠️' : '🔔'}</div>
                <div class="item-content">
                    <div class="item-title">${n.type.toUpperCase()} <span class="item-time">${n.time}</span></div>
                    <p class="item-desc">${n.msg}</p>
                </div>
            </div>
        `).join("");
    }

    readNotification(id) {
        const notif = this.state.notifications.find(n => n.id === id);
        if (notif) {
            notif.read = true;
            this.renderNotifications();
            if (this.state.currentView === "notifications") {
                this.renderNotificationsPage();
            }
        }
    }

    markAllNotificationsRead() {
        this.state.notifications.forEach(n => n.read = true);
        this.renderNotifications();
        if (this.state.currentView === "notifications") {
            this.renderNotificationsPage();
        }
        this.showToast("All notifications marked as read.", "success");
    }

    renderNotificationsPage() {
        this.elements.notifPageList.innerHTML = this.state.notifications.map(n => `
            <div class="glass-card notification-card ${n.read ? '' : 'unread'}" onclick="app.readNotification('${n.id}')">
                <div class="notif-icon-circle ${n.type}">
                    <i data-lucide="${n.type === 'success' ? 'check' : n.type === 'warning' ? 'alert-triangle' : 'bell'}"></i>
                </div>
                <div class="notif-details">
                    <p class="notif-msg">${n.msg}</p>
                    <span class="notif-time">${n.time}</span>
                </div>
                ${n.read ? '' : '<div class="notif-unread-dot"></div>'}
            </div>
        `).join("");
        lucide.createIcons();
    }

    /* Browse Page Logic */
    updateRewardSliderVal(val) {
        document.getElementById("reward-slider-val").textContent = `$${val}`;
        this.filterTasks();
    }

    filterTasks() {
        const query = document.getElementById("browse-search-input").value.toLowerCase();
        const category = document.getElementById("browse-filter-category").value;
        const maxDeadline = document.getElementById("browse-filter-deadline").value;
        const status = document.getElementById("browse-filter-status").value;
        const minReward = parseFloat(document.getElementById("browse-filter-reward").value);

        const filtered = this.state.tasks.filter(t => {
            const matchesQuery = t.title.toLowerCase().includes(query) || t.description.toLowerCase().includes(query);
            const matchesCategory = category === "all" || t.category === category;
            const matchesReward = t.reward >= minReward;
            
            let matchesDeadline = true;
            if (maxDeadline !== "any") {
                matchesDeadline = t.deadlineDays <= parseInt(maxDeadline);
            }
            
            let matchesStatus = true;
            if (status !== "all") {
                matchesStatus = t.status === status;
            } else {
                // By default browse tasks only shows open tasks unless user asks for all
                matchesStatus = t.status === "open";
            }

            return matchesQuery && matchesCategory && matchesReward && matchesDeadline && matchesStatus;
        });

        this.renderTaskGrid(filtered, this.elements.browseTasksList);
    }

    renderTaskGrid(taskList, container) {
        if (taskList.length === 0) {
            container.innerHTML = `
                <div class="glass-card flex-center" style="grid-column: 1 / -1; padding: 40px; text-align: center; flex-direction: column; gap: 16px;">
                    <i data-lucide="help-circle" style="width: 48px; height: 48px; color: var(--text-dark);"></i>
                    <h3>No microtasks found</h3>
                    <p>Adjust your search filters to scan the platform escrows.</p>
                </div>
            `;
            lucide.createIcons();
            return;
        }

        container.innerHTML = taskList.map(t => {
            // Determine button labels depending on status
            let actionBtn = "";
            if (t.status === "open") {
                actionBtn = `<button class="btn btn-primary btn-sm" onclick="app.acceptTask('${t.id}')">Accept Task</button>`;
            } else if (t.status === "in_progress") {
                actionBtn = `<span class="status-badge warning">In Progress</span>`;
            } else {
                actionBtn = `<span class="status-badge success">Completed</span>`;
            }

            return `
                <div class="glass-card task-card fade-in">
                    <div>
                        <div class="task-card-header">
                            <span class="cat-badge">${t.category}</span>
                            <span class="reward-amt">$${t.reward.toFixed(2)}</span>
                        </div>
                        <h3>${t.title}</h3>
                        <p>${t.description}</p>
                    </div>
                    <div>
                        <div class="task-card-meta">
                            <div class="meta-item">
                                <i data-lucide="calendar"></i>
                                <span>${t.deadlineDays}d left</span>
                            </div>
                            <div class="meta-item">
                                <i data-lucide="sliders"></i>
                                <span>${t.complexity}</span>
                            </div>
                            <div class="meta-item">
                                <i data-lucide="star"></i>
                                <span>${t.provider.rating} Rating</span>
                            </div>
                        </div>
                        <div class="task-card-actions">
                            <button class="btn btn-secondary btn-sm" onclick="app.viewTaskDetails('${t.id}')">View Details</button>
                            ${actionBtn}
                        </div>
                    </div>
                </div>
            `;
        }).join("");
        lucide.createIcons();
    }

    /* Modal / Details Handling */
    viewTaskDetails(id) {
        const task = this.state.tasks.find(t => t.id === id);
        if (!task) return;

        // Populating Modal
        document.getElementById("modal-task-category").textContent = task.category;
        document.getElementById("modal-task-complexity").textContent = `${task.complexity} Complexity`;
        
        // Color complexity badge
        const complexityBadge = document.getElementById("modal-task-complexity");
        complexityBadge.className = "complexity-badge";
        if (task.complexity === "Low") complexityBadge.style.color = "var(--success-color)";
        else if (task.complexity === "Medium") complexityBadge.style.color = "var(--warning-color)";
        else complexityBadge.style.color = "var(--error-color)";

        document.getElementById("modal-task-title").textContent = task.title;
        document.getElementById("modal-task-desc").textContent = task.description;
        
        document.getElementById("modal-provider-name").textContent = task.provider.name;
        document.getElementById("modal-provider-name").nextElementSibling.textContent = `⭐ ${task.provider.rating} Rating (Simulated)`;
        
        document.getElementById("modal-task-reward").textContent = `$${task.reward.toFixed(2)}`;
        document.getElementById("modal-task-deadline").textContent = task.deadline;
        document.getElementById("modal-task-est-time").textContent = task.estTime;
        
        const matchRow = document.getElementById("modal-match-row");
        const matchText = document.getElementById("modal-task-match");
        if (task.matchPercentage) {
            matchRow.classList.remove("hidden");
            matchText.textContent = `${task.matchPercentage}% Match`;
        } else {
            matchRow.classList.add("hidden");
        }

        // Show/hide attachments details
        const attachmentsSec = document.getElementById("modal-attachments-section");
        if (task.uploadedFile) {
            attachmentsSec.classList.remove("hidden");
            document.getElementById("modal-attachment-name").textContent = task.uploadedFile.name;
        } else {
            attachmentsSec.classList.add("hidden");
        }

        // Progress Section
        const progressSec = document.getElementById("modal-progress-section");
        if (task.status === "in_progress") {
            progressSec.classList.remove("hidden");
            document.getElementById("modal-progress-bar").style.width = `${task.progress}%`;
            document.getElementById("modal-progress-text").textContent = `In Progress (${task.progress}% Complete)`;
        } else {
            progressSec.classList.add("hidden");
        }

        // Render Action buttons inside modal
        const actionsContainer = document.getElementById("modal-actions-container");
        if (task.status === "open") {
            actionsContainer.innerHTML = `
                <button class="btn btn-primary btn-block" onclick="app.acceptTask('${task.id}', true)">Accept Task & Lock Escrow</button>
            `;
        } else if (task.status === "in_progress") {
            actionsContainer.innerHTML = `
                <button class="btn btn-primary btn-block" onclick="app.submitTaskWork('${task.id}')">Submit Final Output</button>
                <button class="btn btn-secondary btn-block" onclick="app.cancelAcceptedTask('${task.id}')">Cancel Task Contract</button>
            `;
        } else if (task.status === "completed") {
            actionsContainer.innerHTML = `
                <span class="status-badge success text-center" style="display:block; padding: 12px;">Task Completed & Released</span>
            `;
        } else {
            actionsContainer.innerHTML = `
                <span class="status-badge error text-center" style="display:block; padding: 12px;">Contract Cancelled</span>
            `;
        }

        this.elements.taskModal.classList.remove("hidden");
        lucide.createIcons();
    }

    closeTaskDetailsModal() {
        this.elements.taskModal.classList.add("hidden");
    }

    /* P2P Task Interactions */
    acceptTask(id, fromModal = false) {
        if (this.state.user.role === "provider") {
            this.showToast("Providers cannot accept solving tasks.", "warning");
            return;
        }

        const task = this.state.tasks.find(t => t.id === id);
        if (!task) return;

        task.status = "in_progress";
        task.acceptedBy = this.state.user.name;
        task.progress = 10; // Start progress bar

        this.showToast(`Task '${task.title}' accepted!`, "success");
        this.pushNotification("info", `Escrow initialized: $${task.reward.toFixed(2)} locked in smart escrow contract.`);

        if (fromModal) {
            this.closeTaskDetailsModal();
        }

        this.updateMyTasksTabsCount();
        this.updateStatsUI();
        
        // Refresh active views
        if (this.state.currentView === "browse") this.filterTasks();
        if (this.state.currentView === "my-tasks") this.renderMyTasks();
        if (this.state.currentView === "dashboard") {
            this.renderDashboardAIList();
            this.initDashboardCharts();
        }

        // Trigger simulation of work progress
        this.simulateWorkProgress(task.id);
    }

    simulateWorkProgress(taskId) {
        const interval = setInterval(() => {
            const task = this.state.tasks.find(t => t.id === taskId);
            if (!task || task.status !== "in_progress") {
                clearInterval(interval);
                return;
            }

            if (task.progress < 90) {
                task.progress += 20;
                if (this.state.currentView === "my-tasks" && this.state.currentMyTasksTab === "in-progress") {
                    this.renderMyTasks();
                }
                
                // If viewing details modal of this task, refresh it
                if (!this.elements.taskModal.classList.contains("hidden")) {
                    const progressSec = document.getElementById("modal-progress-section");
                    if (progressSec) {
                        document.getElementById("modal-progress-bar").style.width = `${task.progress}%`;
                        document.getElementById("modal-progress-text").textContent = `In Progress (${task.progress}% Complete)`;
                    }
                }
            } else {
                clearInterval(interval);
            }
        }, 12000);
    }

    submitTaskWork(id) {
        const task = this.state.tasks.find(t => t.id === id);
        if (!task) return;

        // Transition states
        task.status = "completed";
        task.progress = 100;
        
        // Payout transfer
        this.state.user.balance += task.reward;
        this.state.user.earnings += task.reward;
        this.state.user.completedCount += 1;
        
        // Update reputation slightly for successful task completion
        if (this.state.user.reputation < 10) {
            this.state.user.reputation = Math.min(10, this.state.user.reputation + 0.05);
        }

        // Ledger entry
        const txId = "TX-" + Math.floor(Math.random() * 1000 + 9000);
        this.state.transactions.unshift({
            id: txId,
            task: task.title,
            amount: task.reward,
            status: "Completed",
            date: new Date().toISOString().split("T")[0]
        });

        this.closeTaskDetailsModal();
        this.showToast(`Output submitted. Reward of $${task.reward.toFixed(2)} transferred to balance!`, "success");
        this.pushNotification("success", `Payout complete for '${task.title}'. Escrow released.`);

        this.updateMyTasksTabsCount();
        this.updateStatsUI();

        // Refresh views
        if (this.state.currentView === "my-tasks") this.renderMyTasks();
        if (this.state.currentView === "dashboard") {
            this.renderDashboardAIList();
            this.initDashboardCharts();
        }
    }

    cancelAcceptedTask(id) {
        const task = this.state.tasks.find(t => t.id === id);
        if (!task) return;

        task.status = "cancelled";
        this.closeTaskDetailsModal();
        this.showToast(`Task '${task.title}' has been cancelled.`, "warning");
        this.pushNotification("warning", `Escrow cancelled for '${task.title}'. Funds returned to Provider.`);
        
        // Slightly penalize reputation score for cancellation
        this.state.user.reputation = Math.max(1.0, this.state.user.reputation - 0.2);

        this.updateMyTasksTabsCount();
        this.updateStatsUI();

        if (this.state.currentView === "my-tasks") this.renderMyTasks();
    }

    /* Task Escrow Creation Form */
    handleFileUpload(e) {
        const file = e.target.files[0];
        if (file) {
            this.state.uploadedFile = file;
            document.getElementById("uploaded-filename").textContent = `${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
            document.getElementById("uploaded-file-info").classList.remove("hidden");
            this.showToast("File uploaded successfully to memory.", "success");
        }
    }

    removeUploadedFile() {
        this.state.uploadedFile = null;
        document.getElementById("task-file-input").value = "";
        document.getElementById("uploaded-file-info").classList.add("hidden");
    }

    handleCreateTask(e) {
        e.preventDefault();
        
        const title = document.getElementById("task-title").value;
        const description = document.getElementById("task-desc").value;
        const category = document.getElementById("task-category").value;
        const reward = parseFloat(document.getElementById("task-reward").value);
        const deadline = document.getElementById("task-deadline").value;
        const complexity = document.getElementById("task-complexity").value;

        // Calculate days left
        const diffTime = Math.abs(new Date(deadline) - new Date());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        const newTask = {
            id: "TS-" + Math.floor(Math.random() * 900 + 200),
            title: title,
            description: description,
            category: category,
            reward: reward,
            deadline: deadline,
            deadlineDays: diffDays,
            complexity: complexity,
            provider: {
                name: this.state.user.name,
                rating: "5.0",
                publishedCount: 1,
                completionRate: "100%"
            },
            status: "open",
            acceptedBy: null,
            matchPercentage: Math.floor(Math.random() * 20 + 80), // random high match
            estTime: "2h 0m",
            progress: 0,
            dateAdded: new Date().toISOString().split("T")[0],
            uploadedFile: this.state.uploadedFile
        };

        this.state.tasks.unshift(newTask);
        this.elements.createTaskForm.reset();
        this.removeUploadedFile();

        this.showToast(`Task '${title}' published!`, "success");
        this.pushNotification("success", `Task posted: Escrow of $${reward.toFixed(2)} funded.`);
        
        this.updateMyTasksTabsCount();
        this.updateStatsUI();

        // Redirect to browse tasks
        this.navigateTo("browse");
    }

    saveDraftTask() {
        this.showToast("Task escrow saved as draft.", "info");
    }

    /* My Tasks Tab Router */
    switchMyTasksTab(tab) {
        this.state.currentMyTasksTab = tab;
        document.querySelectorAll("#view-my-tasks .tab-btn").forEach(btn => {
            btn.classList.remove("active");
            if (btn.getAttribute("data-tab") === tab) {
                btn.classList.add("active");
            }
        });
        this.renderMyTasks();
    }

    updateMyTasksTabsCount() {
        const counts = { open: 0, inProgress: 0, completed: 0, cancelled: 0 };
        
        this.state.tasks.forEach(t => {
            if (t.status === "open") counts.open++;
            else if (t.status === "in_progress") counts.inProgress++;
            else if (t.status === "completed") counts.completed++;
            else if (t.status === "cancelled") counts.cancelled++;
        });

        this.elements.countTabOpen.textContent = counts.open;
        this.elements.countTabProgress.textContent = counts.inProgress;
        this.elements.countTabCompleted.textContent = counts.completed;
        this.elements.countTabCancelled.textContent = counts.cancelled;
    }

    renderMyTasks() {
        let tabStatus = "open";
        if (this.state.currentMyTasksTab === "in-progress") tabStatus = "in_progress";
        else if (this.state.currentMyTasksTab === "completed") tabStatus = "completed";
        else if (this.state.currentMyTasksTab === "cancelled") tabStatus = "cancelled";

        // If user is worker, show tasks accepted by worker.
        // If user is provider, show tasks posted by provider.
        const matches = this.state.tasks.filter(t => {
            if (this.state.user.role === "worker") {
                if (tabStatus === "open") {
                    return t.status === "open"; // worker can see all open to accept
                } else {
                    return t.status === tabStatus && t.acceptedBy === this.state.user.name;
                }
            } else {
                // Provider shows tasks published by provider
                return t.status === tabStatus && t.provider.name === this.state.user.name;
            }
        });

        this.elements.myTasksList.innerHTML = "";
        
        if (matches.length === 0) {
            this.elements.myTasksList.innerHTML = `
                <div class="glass-card flex-center" style="grid-column: 1 / -1; padding: 40px; text-align: center; flex-direction: column; gap: 16px;">
                    <i data-lucide="folder" style="width: 48px; height: 48px; color: var(--text-dark);"></i>
                    <h3>No tasks found in this tab</h3>
                </div>
            `;
            lucide.createIcons();
            return;
        }

        this.elements.myTasksList.innerHTML = matches.map(t => {
            let footerBlock = "";
            if (t.status === "in_progress") {
                footerBlock = `
                    <div class="my-task-card-progress">
                        <div class="lbl">
                            <span>Completion progress</span>
                            <span class="val">${t.progress}%</span>
                        </div>
                        <div class="progress-bar-container">
                            <div class="progress-bar-fill" style="width: ${t.progress}%;"></div>
                        </div>
                    </div>
                `;
            }

            return `
                <div class="glass-card task-card fade-in">
                    <div>
                        <div class="task-card-header">
                            <span class="cat-badge">${t.category}</span>
                            <span class="reward-amt">$${t.reward.toFixed(2)}</span>
                        </div>
                        <h3>${t.title}</h3>
                        <p>${t.description}</p>
                        ${footerBlock}
                    </div>
                    <div>
                        <div class="task-card-meta">
                            <div class="meta-item">
                                <i data-lucide="calendar"></i>
                                <span>${t.deadlineDays}d left</span>
                            </div>
                            <div class="meta-item">
                                <i data-lucide="sliders"></i>
                                <span>${t.complexity}</span>
                            </div>
                        </div>
                        <div class="task-card-actions">
                            <button class="btn btn-secondary btn-sm btn-block" onclick="app.viewTaskDetails('${t.id}')">Manage Task</button>
                        </div>
                    </div>
                </div>
            `;
        }).join("");
        lucide.createIcons();
    }

    /* AI Recommendations Page UI */
    renderAIRecommendations() {
        const list = document.getElementById("ai-recommendations-list");
        
        // Filter tasks that match high percentage
        const highMatches = this.state.tasks.filter(t => t.status === "open" && t.matchPercentage >= 80);
        
        if (highMatches.length === 0) {
            list.innerHTML = `<p>No recommendations available. Update your skills profile to trigger matching.</p>`;
            return;
        }

        list.innerHTML = highMatches.map(t => `
            <div class="glass-card rec-card-h fade-in" onclick="app.viewTaskDetails('${t.id}')" style="cursor:pointer">
                <div>
                    <div class="rec-h-badge-row">
                        <span class="rec-badge"><i data-lucide="cpu" class="badge-icon-sm"></i> AI Best Match</span>
                        <span class="rec-pct">${t.matchPercentage}% Match</span>
                    </div>
                    <h4>${t.title}</h4>
                    <p>${t.description}</p>
                </div>
                <div class="rec-h-footer">
                    <div>
                        <span class="reward-amt">$${t.reward.toFixed(2)}</span>
                        <span style="font-size:0.75rem; color:var(--text-muted); margin-left: 8px;">Est: ${t.estTime}</span>
                    </div>
                    <button class="btn btn-primary btn-xs" onclick="event.stopPropagation(); app.acceptTask('${t.id}')">Accept</button>
                </div>
            </div>
        `).join("");
        lucide.createIcons();
    }

    renderDashboardAIList() {
        const container = document.getElementById("dashboard-ai-rec-list");
        
        // Top 3 matches
        const matches = this.state.tasks
            .filter(t => t.status === "open")
            .sort((a,b) => b.matchPercentage - a.matchPercentage)
            .slice(0, 3);

        container.innerHTML = matches.map(t => `
            <div class="ai-rec-item" onclick="app.viewTaskDetails('${t.id}')">
                <div>
                    <div class="ai-rec-title">${t.title}</div>
                    <div class="ai-rec-reward">$${t.reward.toFixed(2)} • ${t.estTime}</div>
                </div>
                <div class="ai-rec-match">${t.matchPercentage}%</div>
            </div>
        `).join("");
    }

    /* Transactions Table Page UI */
    renderTransactionsTable() {
        this.filterTransactions();
    }

    filterTransactions() {
        const query = document.getElementById("transaction-search") ? document.getElementById("transaction-search").value.toLowerCase() : "";
        const container = this.elements.transactionsTableBody;
        
        if (!container) return;

        const filtered = this.state.transactions.filter(tx => {
            return tx.id.toLowerCase().includes(query) || tx.task.toLowerCase().includes(query);
        });

        if (filtered.length === 0) {
            container.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 24px;">No transactions matching your query.</td></tr>`;
            return;
        }

        container.innerHTML = filtered.map(tx => `
            <tr>
                <td class="tx-id">${tx.id}</td>
                <td class="tx-task">${tx.task}</td>
                <td class="tx-amount">$${tx.amount.toFixed(2)}</td>
                <td><span class="status-badge success">${tx.status}</span></td>
                <td>${tx.date}</td>
                <td>
                    <button class="text-btn" onclick="app.showToast('Invoice generation coming soon', 'info')">Invoice</button>
                </td>
            </tr>
        `).join("");
    }

    renderDashboardTransactions() {
        const container = document.getElementById("dashboard-transactions-body");
        if (!container) return;
        
        // Take top 3 recent
        const recent = this.state.transactions.slice(0, 3);
        
        container.innerHTML = recent.map(tx => `
            <tr>
                <td class="task-name">${tx.task}</td>
                <td class="amount">$${tx.amount.toFixed(2)}</td>
                <td><span class="status-badge success">${tx.status}</span></td>
            </tr>
        `).join("");
    }

    exportTransactions() {
        this.showToast("Transactions ledger CSV download initiated!", "success");
    }

    /* Reviews Panel UI */
    renderReviews() {
        if (!this.elements.reviewsListContainer) return;
        this.elements.reviewsListContainer.innerHTML = this.state.reviews.map(r => `
            <div class="glass-card review-item-card fade-in">
                <div class="review-item-header">
                    <div class="review-user-info">
                        <div class="review-user-avatar">👤</div>
                        <div>
                            <div class="review-user-name">${r.author}</div>
                            <div class="review-user-role">${r.role}</div>
                        </div>
                    </div>
                    <div class="review-date-stars">
                        <div class="review-date">${r.date}</div>
                        <div class="review-stars-s">${"⭐".repeat(r.rating)}</div>
                    </div>
                </div>
                <p class="review-text">"${r.text}"</p>
            </div>
        `).join("");
    }

    /* Profile Page UI */
    renderProfile() {
        document.getElementById("profile-display-pic").src = this.state.user.avatar;
        document.getElementById("profile-display-name").textContent = this.state.user.name;
        document.getElementById("profile-display-role").textContent = this.state.user.role.charAt(0).toUpperCase() + this.state.user.role.slice(1);
        document.getElementById("profile-display-bio").textContent = this.state.user.bio || "Decentralized worker. I specialize in RLHF chatbot alignment, Spanish-English translations, and data verification projects.";
        document.getElementById("profile-display-exp").textContent = this.state.user.experience;
        
        // Set stats
        document.getElementById("profile-stat-completed").textContent = this.state.user.completedCount;
        document.getElementById("profile-stat-earnings").textContent = `$${this.state.user.earnings.toFixed(2)}`;
        document.getElementById("profile-stat-reputation").textContent = this.state.user.reputation.toFixed(1);

        // Edit form values
        document.getElementById("profile-name-input").value = this.state.user.name;
        document.getElementById("profile-role-input").value = this.state.user.role;
        document.getElementById("profile-bio-input").value = this.state.user.bio || "Decentralized worker. I specialize in RLHF chatbot alignment, Spanish-English translations, and data verification projects.";

        // Skills tags
        const skillsContainer = document.getElementById("profile-skills-list");
        skillsContainer.innerHTML = this.state.user.skills.map(s => `
            <span class="profile-skill-tag">${s}</span>
        `).join("");
    }

    handleProfileSave(e) {
        e.preventDefault();
        
        const name = document.getElementById("profile-name-input").value;
        const role = document.getElementById("profile-role-input").value;
        const bio = document.getElementById("profile-bio-input").value;

        this.state.user.name = name;
        this.state.user.role = role;
        this.state.user.bio = bio;
        
        this.updateProfileUI();
        this.renderProfile();
        
        this.showToast("Profile details updated successfully!", "success");
    }

    /* Settings Page UI Router */
    switchSettingsTab(tab) {
        this.state.currentSettingsTab = tab;
        
        // Toggle Active button
        document.querySelectorAll(".settings-nav-btn").forEach(btn => {
            btn.classList.remove("active");
            if (btn.getAttribute("data-settings-tab") === tab) {
                btn.classList.add("active");
            }
        });

        // Hide all tabs contents
        document.querySelectorAll(".settings-card.tab-content").forEach(card => {
            card.classList.add("hidden");
        });

        const activeCard = document.getElementById(`settings-tab-${tab}`);
        if (activeCard) {
            activeCard.classList.remove("hidden");
        }
    }

    setThemePreset(theme) {
        document.body.className = ""; // remove themes
        document.querySelectorAll(".theme-option").forEach(opt => opt.classList.remove("active"));
        
        if (theme === "emerald") {
            document.body.classList.add("theme-emerald");
            document.getElementById("theme-emerald").classList.add("active");
            this.showToast("Emerald Neon preset theme applied.", "success");
        } else if (theme === "sunset") {
            document.body.classList.add("theme-sunset");
            document.getElementById("theme-sunset").classList.add("active");
            this.showToast("Sunset Gold preset theme applied.", "success");
        } else {
            document.getElementById("theme-purple").classList.add("active");
            this.showToast("Deep Purple default theme applied.", "success");
        }
        
        // Re-render any charts to take on new primary colors
        setTimeout(() => {
            this.initDashboardCharts();
            this.initAnalyticsCharts();
        }, 100);
    }

    toggleAmbientAnimations(enabled) {
        const glows = document.querySelectorAll(".ambient-glow");
        glows.forEach(glow => {
            if (enabled) {
                glow.style.display = "block";
            } else {
                glow.style.display = "none";
            }
        });
        this.showToast(enabled ? "Ambient background glows enabled." : "Ambient background glows disabled.", "info");
    }

    toggleDarkMode() {
        document.body.classList.toggle("light-mode");
        const isLight = document.body.classList.contains("light-mode");
        
        // Change button icon dynamically
        const themeBtn = document.getElementById("theme-toggle-btn");
        if (isLight) {
            themeBtn.innerHTML = '<i data-lucide="moon"></i>';
            this.showToast("Light mode activated (Visual).", "info");
        } else {
            themeBtn.innerHTML = '<i data-lucide="sun"></i>';
            this.showToast("Dark futuristic mode activated.", "info");
        }
        lucide.createIcons();

        // Refresh charts styles
        setTimeout(() => {
            this.initDashboardCharts();
            this.initAnalyticsCharts();
        }, 100);
    }

    handleSettingsSave(e, msg) {
        e.preventDefault();
        this.showToast(msg, "success");
    }


    /* Charting Integration using ApexCharts */
    
    getChartPrimaryColor() {
        const isLight = document.body.classList.contains("light-mode");
        if (document.body.classList.contains("theme-emerald")) return "#10B981";
        if (document.body.classList.contains("theme-sunset")) return "#F59E0B";
        return "#7C3AED"; // Default Purple
    }

    getChartSecondaryColor() {
        if (document.body.classList.contains("theme-emerald")) return "#34D399";
        if (document.body.classList.contains("theme-sunset")) return "#FBBF24";
        return "#A855F7"; // Default Medium Purple
    }

    initDashboardCharts() {
        const chartColor = this.getChartPrimaryColor();
        const chartSecondary = this.getChartSecondaryColor();
        const isLight = document.body.classList.contains("light-mode");
        const textThemeColor = isLight ? "#52525B" : "#A1A1AA";

        const options = {
            series: [
                {
                    name: 'Tasks Completed',
                    type: 'area',
                    data: [3, 5, 2, 7, 5, 8, 4]
                },
                {
                    name: 'Earnings ($)',
                    type: 'column',
                    data: [45, 90, 30, 150, 95, 120, 60]
                }
            ],
            chart: {
                height: 300,
                type: 'line',
                toolbar: { show: false },
                background: 'transparent'
            },
            colors: [chartColor, chartSecondary],
            stroke: {
                width: [4, 0],
                curve: 'smooth'
            },
            fill: {
                type: ['gradient', 'solid'],
                gradient: {
                    shade: 'dark',
                    type: "vertical",
                    shadeIntensity: 0.5,
                    gradientToColors: [chartSecondary],
                    inverseColors: false,
                    opacityFrom: 0.6,
                    opacityTo: 0.1,
                }
            },
            labels: ['06/19', '06/20', '06/21', '06/22', '06/23', '06/24', '06/25'],
            xaxis: {
                type: 'category',
                labels: { style: { colors: textThemeColor } }
            },
            yaxis: [
                {
                    title: { text: 'Tasks Completed', style: { color: textThemeColor } },
                    labels: { style: { colors: textThemeColor } }
                },
                {
                    opposite: true,
                    title: { text: 'Earnings ($)', style: { color: textThemeColor } },
                    labels: { style: { colors: textThemeColor } }
                }
            ],
            grid: {
                borderColor: isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.05)'
            },
            legend: {
                labels: { colors: textThemeColor }
            },
            theme: { mode: isLight ? 'light' : 'dark' }
        };

        const chartContainer = document.querySelector("#dashboard-tasks-chart");
        if (chartContainer) {
            chartContainer.innerHTML = "";
            if (this.charts.dashboard) this.charts.dashboard.destroy();
            this.charts.dashboard = new ApexCharts(chartContainer, options);
            this.charts.dashboard.render();
        }
    }

    initAnalyticsCharts() {
        const pColor = this.getChartPrimaryColor();
        const sColor = this.getChartSecondaryColor();
        const isLight = document.body.classList.contains("light-mode");
        const textThemeColor = isLight ? "#52525B" : "#A1A1AA";

        // 1. Earnings History Chart
        const earningsOpts = {
            series: [{ name: 'Earnings', data: [120, 240, 180, 480, 520, 680.5] }],
            chart: { height: 260, type: 'area', toolbar: { show: false }, background: 'transparent' },
            colors: [pColor],
            stroke: { width: 3, curve: 'smooth' },
            fill: {
                type: 'gradient',
                gradient: { shadeIntensity: 1, opacityFrom: 0.5, opacityTo: 0.05 }
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                labels: { style: { colors: textThemeColor } }
            },
            yaxis: { labels: { style: { colors: textThemeColor } } },
            grid: { borderColor: isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.05)' },
            theme: { mode: isLight ? 'light' : 'dark' }
        };
        const ec = document.getElementById("analytics-earnings-chart");
        if (ec) {
            ec.innerHTML = "";
            if (this.charts.earnings) this.charts.earnings.destroy();
            this.charts.earnings = new ApexCharts(ec, earningsOpts);
            this.charts.earnings.render();
        }

        // 2. Volumes Chart
        const volumesOpts = {
            series: [{ name: 'Tasks Completed', data: [12, 18, 14, 25, 20, 28] }],
            chart: { height: 260, type: 'bar', toolbar: { show: false }, background: 'transparent' },
            colors: [sColor],
            xaxis: {
                categories: ['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4', 'Wk 5', 'Wk 6'],
                labels: { style: { colors: textThemeColor } }
            },
            yaxis: { labels: { style: { colors: textThemeColor } } },
            grid: { borderColor: isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.05)' },
            theme: { mode: isLight ? 'light' : 'dark' }
        };
        const vc = document.getElementById("analytics-completion-chart");
        if (vc) {
            vc.innerHTML = "";
            if (this.charts.completion) this.charts.completion.destroy();
            this.charts.completion = new ApexCharts(vc, volumesOpts);
            this.charts.completion.render();
        }

        // 3. Category Distribution Pie Chart
        const catOpts = {
            series: [40, 25, 20, 15],
            chart: { width: 340, type: 'donut', background: 'transparent' },
            labels: ['Coding', 'AI Training', 'Translation', 'Design'],
            colors: [pColor, sColor, '#C084FC', '#3b82f6'],
            legend: { position: 'bottom', labels: { colors: textThemeColor } },
            theme: { mode: isLight ? 'light' : 'dark' }
        };
        const cc = document.getElementById("analytics-category-chart");
        if (cc) {
            cc.innerHTML = "";
            if (this.charts.category) this.charts.category.destroy();
            this.charts.category = new ApexCharts(cc, catOpts);
            this.charts.category.render();
        }

        // 4. Productivity Scatter/Line Chart
        const prodOpts = {
            series: [{
                name: 'Completion Speed (min)',
                data: [
                    { x: 9.0, y: 120 }, { x: 9.2, y: 110 }, { x: 9.4, y: 85 },
                    { x: 9.5, y: 90 }, { x: 9.6, y: 70 }, { x: 9.8, y: 45 }
                ]
            }],
            chart: { height: 260, type: 'line', toolbar: { show: false }, background: 'transparent' },
            colors: [pColor],
            stroke: { width: 3, curve: 'smooth' },
            xaxis: {
                title: { text: 'AI Reputation Score', style: { color: textThemeColor } },
                labels: { style: { colors: textThemeColor } }
            },
            yaxis: {
                title: { text: 'Avg Completion Time (Min)', style: { color: textThemeColor } },
                labels: { style: { colors: textThemeColor } }
            },
            grid: { borderColor: isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.05)' },
            theme: { mode: isLight ? 'light' : 'dark' }
        };
        const pc = document.getElementById("analytics-productivity-chart");
        if (pc) {
            pc.innerHTML = "";
            if (this.charts.productivity) this.charts.productivity.destroy();
            this.charts.productivity = new ApexCharts(pc, prodOpts);
            this.charts.productivity.render();
        }
    }
}

// Instantiate App on window load
window.addEventListener("DOMContentLoaded", () => {
    window.app = new TaskSphereApp();
});
