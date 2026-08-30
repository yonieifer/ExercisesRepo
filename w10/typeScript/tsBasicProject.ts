interface Task {
id: number;
title: string;
done: boolean;
priority: &#39;high&#39; | &#39;medium&#39; | &#39;low&#39;;
tags?: string[];
}