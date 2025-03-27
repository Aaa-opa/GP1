import java.util.concurrent.ForkJoinPool;
import java.util.concurrent.RecursiveAction;

class MyTask extends RecursiveAction {
    @Override
    protected void compute() {
        System.out.println("线程运行中: " + Thread.currentThread().getName());
    }
}

public class Main {
    public static void main(String[] args) {
        ForkJoinPool pool = new ForkJoinPool();
        pool.invoke(new MyTask()); // 执行任务
    }
}
