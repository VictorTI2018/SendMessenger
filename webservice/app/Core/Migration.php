<?php

namespace App\Core;

use Illuminate\Database\Migrations\Migration as BaseMigration;
use Illuminate\Support\Facades\DB;

class Migration extends BaseMigration {

    protected $filename;

    public function scripts()
    {
        return file_get_contents(base_path("/database/scripts/$this->filename"));
    }

    public function up()
    {
        DB::transaction(function () {
            DB::unprepared($this->scripts());
        });
    }
}
