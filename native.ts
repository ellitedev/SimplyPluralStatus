/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { ConnectSrc, ImageSrc } from "@main/csp";

// Add SimplyPlural API domains to CSP
export const cspOverrides = {
    "api.apparyllis.com": ImageSrc, // For images from SimplyPlural API
    "wss://api.apparyllis.com": ConnectSrc // For websocket connections to SimplyPlural API
};

