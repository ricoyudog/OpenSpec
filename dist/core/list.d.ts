interface ListOptions {
    sort?: 'recent' | 'name';
    json?: boolean;
}
export declare class ListCommand {
    execute(targetPath?: string, mode?: 'changes' | 'specs', options?: ListOptions): Promise<void>;
    /**
     * Discover changes inside git worktrees when isolation.mode is 'worktree'.
     * Scans the worktree root directory, verifies each is a registered git worktree,
     * and checks for openspec/changes/<name>/ inside.
     * Returns empty array if isolation is not configured or scanning fails.
     */
    private discoverWorktreeChanges;
}
export {};
//# sourceMappingURL=list.d.ts.map